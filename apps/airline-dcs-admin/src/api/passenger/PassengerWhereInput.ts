import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PassengerWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  flight?: FlightWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
