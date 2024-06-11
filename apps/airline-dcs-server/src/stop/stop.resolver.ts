import * as graphql from "@nestjs/graphql";
import { StopResolverBase } from "./base/stop.resolver.base";
import { Stop } from "./base/Stop";
import { StopService } from "./stop.service";

@graphql.Resolver(() => Stop)
export class StopResolver extends StopResolverBase {
  constructor(protected readonly service: StopService) {
    super(service);
  }
}
