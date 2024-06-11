import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";

export type StopCreateInput = {
  airport?: string | null;
  arrivalTime?: Date | null;
  departureTime?: Date | null;
  flight?: FlightWhereUniqueInput | null;
};
