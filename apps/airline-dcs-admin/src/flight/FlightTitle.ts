import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "destination";

export const FlightTitle = (record: TFlight): string => {
  return record.destination?.toString() || String(record.id);
};
