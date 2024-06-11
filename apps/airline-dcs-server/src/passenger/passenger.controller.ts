import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PassengerService } from "./passenger.service";
import { PassengerControllerBase } from "./base/passenger.controller.base";

@swagger.ApiTags("passengers")
@common.Controller("passengers")
export class PassengerController extends PassengerControllerBase {
  constructor(protected readonly service: PassengerService) {
    super(service);
  }
}
