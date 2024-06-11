import { Module } from "@nestjs/common";
import { PassengerModuleBase } from "./base/passenger.module.base";
import { PassengerService } from "./passenger.service";
import { PassengerController } from "./passenger.controller";
import { PassengerResolver } from "./passenger.resolver";

@Module({
  imports: [PassengerModuleBase],
  controllers: [PassengerController],
  providers: [PassengerService, PassengerResolver],
  exports: [PassengerService],
})
export class PassengerModule {}
