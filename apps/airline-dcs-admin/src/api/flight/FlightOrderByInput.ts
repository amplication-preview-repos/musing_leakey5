import { SortOrder } from "../../util/SortOrder";

export type FlightOrderByInput = {
  arrivalTime?: SortOrder;
  createdAt?: SortOrder;
  departureTime?: SortOrder;
  destination?: SortOrder;
  flightNumber?: SortOrder;
  id?: SortOrder;
  origin?: SortOrder;
  updatedAt?: SortOrder;
};
