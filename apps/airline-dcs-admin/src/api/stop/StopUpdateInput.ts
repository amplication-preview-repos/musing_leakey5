import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";

export type StopUpdateInput = {
  airport?: string | null;
  arrivalTime?: Date | null;
  departureTime?: Date | null;
  flight?: FlightWhereUniqueInput | null;
};
