/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Passenger } from "./Passenger";
import { PassengerCountArgs } from "./PassengerCountArgs";
import { PassengerFindManyArgs } from "./PassengerFindManyArgs";
import { PassengerFindUniqueArgs } from "./PassengerFindUniqueArgs";
import { CreatePassengerArgs } from "./CreatePassengerArgs";
import { UpdatePassengerArgs } from "./UpdatePassengerArgs";
import { DeletePassengerArgs } from "./DeletePassengerArgs";
import { Flight } from "../../flight/base/Flight";
import { PassengerService } from "../passenger.service";
@graphql.Resolver(() => Passenger)
export class PassengerResolverBase {
  constructor(protected readonly service: PassengerService) {}

  async _passengersMeta(
    @graphql.Args() args: PassengerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Passenger])
  async passengers(
    @graphql.Args() args: PassengerFindManyArgs
  ): Promise<Passenger[]> {
    return this.service.passengers(args);
  }

  @graphql.Query(() => Passenger, { nullable: true })
  async passenger(
    @graphql.Args() args: PassengerFindUniqueArgs
  ): Promise<Passenger | null> {
    const result = await this.service.passenger(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Passenger)
  async createPassenger(
    @graphql.Args() args: CreatePassengerArgs
  ): Promise<Passenger> {
    return await this.service.createPassenger({
      ...args,
      data: {
        ...args.data,

        flight: args.data.flight
          ? {
              connect: args.data.flight,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Passenger)
  async updatePassenger(
    @graphql.Args() args: UpdatePassengerArgs
  ): Promise<Passenger | null> {
    try {
      return await this.service.updatePassenger({
        ...args,
        data: {
          ...args.data,

          flight: args.data.flight
            ? {
                connect: args.data.flight,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Passenger)
  async deletePassenger(
    @graphql.Args() args: DeletePassengerArgs
  ): Promise<Passenger | null> {
    try {
      return await this.service.deletePassenger(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Flight, {
    nullable: true,
    name: "flight",
  })
  async getFlight(@graphql.Parent() parent: Passenger): Promise<Flight | null> {
    const result = await this.service.getFlight(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
