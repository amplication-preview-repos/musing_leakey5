/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StopService } from "../stop.service";
import { StopCreateInput } from "./StopCreateInput";
import { Stop } from "./Stop";
import { StopFindManyArgs } from "./StopFindManyArgs";
import { StopWhereUniqueInput } from "./StopWhereUniqueInput";
import { StopUpdateInput } from "./StopUpdateInput";

export class StopControllerBase {
  constructor(protected readonly service: StopService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Stop })
  async createStop(@common.Body() data: StopCreateInput): Promise<Stop> {
    return await this.service.createStop({
      data: {
        ...data,

        flight: data.flight
          ? {
              connect: data.flight,
            }
          : undefined,
      },
      select: {
        airport: true,
        arrivalTime: true,
        createdAt: true,
        departureTime: true,

        flight: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Stop] })
  @ApiNestedQuery(StopFindManyArgs)
  async stops(@common.Req() request: Request): Promise<Stop[]> {
    const args = plainToClass(StopFindManyArgs, request.query);
    return this.service.stops({
      ...args,
      select: {
        airport: true,
        arrivalTime: true,
        createdAt: true,
        departureTime: true,

        flight: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Stop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stop(
    @common.Param() params: StopWhereUniqueInput
  ): Promise<Stop | null> {
    const result = await this.service.stop({
      where: params,
      select: {
        airport: true,
        arrivalTime: true,
        createdAt: true,
        departureTime: true,

        flight: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Stop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStop(
    @common.Param() params: StopWhereUniqueInput,
    @common.Body() data: StopUpdateInput
  ): Promise<Stop | null> {
    try {
      return await this.service.updateStop({
        where: params,
        data: {
          ...data,

          flight: data.flight
            ? {
                connect: data.flight,
              }
            : undefined,
        },
        select: {
          airport: true,
          arrivalTime: true,
          createdAt: true,
          departureTime: true,

          flight: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Stop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStop(
    @common.Param() params: StopWhereUniqueInput
  ): Promise<Stop | null> {
    try {
      return await this.service.deleteStop({
        where: params,
        select: {
          airport: true,
          arrivalTime: true,
          createdAt: true,
          departureTime: true,

          flight: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
