import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StopController } from "../stop.controller";
import { StopService } from "../stop.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  airport: "exampleAirport",
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  airport: "exampleAirport",
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    airport: "exampleAirport",
    arrivalTime: new Date(),
    createdAt: new Date(),
    departureTime: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  airport: "exampleAirport",
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createStop() {
    return CREATE_RESULT;
  },
  stops: () => FIND_MANY_RESULT,
  stop: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Stop", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StopService,
          useValue: service,
        },
      ],
      controllers: [StopController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /stops", async () => {
    await request(app.getHttpServer())
      .post("/stops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arrivalTime: CREATE_RESULT.arrivalTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stops", async () => {
    await request(app.getHttpServer())
      .get("/stops")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          arrivalTime: FIND_MANY_RESULT[0].arrivalTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          departureTime: FIND_MANY_RESULT[0].departureTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stops/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stops"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stops/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stops"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        arrivalTime: FIND_ONE_RESULT.arrivalTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        departureTime: FIND_ONE_RESULT.departureTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stops existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arrivalTime: CREATE_RESULT.arrivalTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stops")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
