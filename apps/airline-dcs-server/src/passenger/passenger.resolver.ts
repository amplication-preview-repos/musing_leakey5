import * as graphql from "@nestjs/graphql";
import { PassengerResolverBase } from "./base/passenger.resolver.base";
import { Passenger } from "./base/Passenger";
import { PassengerService } from "./passenger.service";

@graphql.Resolver(() => Passenger)
export class PassengerResolver extends PassengerResolverBase {
  constructor(protected readonly service: PassengerService) {
    super(service);
  }
}
