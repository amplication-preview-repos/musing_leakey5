import { PassengerUpdateManyWithoutFlightsInput } from "./PassengerUpdateManyWithoutFlightsInput";
import { StopUpdateManyWithoutFlightsInput } from "./StopUpdateManyWithoutFlightsInput";

export type FlightUpdateInput = {
  arrivalTime?: Date | null;
  departureTime?: Date | null;
  destination?: string | null;
  flightNumber?: string | null;
  origin?: string | null;
  passengers?: PassengerUpdateManyWithoutFlightsInput;
  stops?: StopUpdateManyWithoutFlightsInput;
};
