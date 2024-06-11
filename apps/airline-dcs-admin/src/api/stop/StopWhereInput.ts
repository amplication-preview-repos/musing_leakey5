import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type StopWhereInput = {
  airport?: StringNullableFilter;
  arrivalTime?: DateTimeNullableFilter;
  departureTime?: DateTimeNullableFilter;
  flight?: FlightWhereUniqueInput;
  id?: StringFilter;
};
