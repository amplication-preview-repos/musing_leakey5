import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";

export type PassengerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  flight?: FlightWhereUniqueInput | null;
  lastName?: string | null;
};
