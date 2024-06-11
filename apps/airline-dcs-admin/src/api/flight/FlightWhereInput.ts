import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PassengerListRelationFilter } from "../passenger/PassengerListRelationFilter";
import { StopListRelationFilter } from "../stop/StopListRelationFilter";

export type FlightWhereInput = {
  arrivalTime?: DateTimeNullableFilter;
  departureTime?: DateTimeNullableFilter;
  destination?: StringNullableFilter;
  flightNumber?: StringNullableFilter;
  id?: StringFilter;
  origin?: StringNullableFilter;
  passengers?: PassengerListRelationFilter;
  stops?: StopListRelationFilter;
};
