import { SortOrder } from "../../util/SortOrder";

export type StopOrderByInput = {
  airport?: SortOrder;
  arrivalTime?: SortOrder;
  createdAt?: SortOrder;
  departureTime?: SortOrder;
  flightId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
