import { PassengerCreateNestedManyWithoutFlightsInput } from "./PassengerCreateNestedManyWithoutFlightsInput";
import { StopCreateNestedManyWithoutFlightsInput } from "./StopCreateNestedManyWithoutFlightsInput";

export type FlightCreateInput = {
  arrivalTime?: Date | null;
  departureTime?: Date | null;
  destination?: string | null;
  flightNumber?: string | null;
  origin?: string | null;
  passengers?: PassengerCreateNestedManyWithoutFlightsInput;
  stops?: StopCreateNestedManyWithoutFlightsInput;
};
