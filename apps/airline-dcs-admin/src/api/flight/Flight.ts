import { Passenger } from "../passenger/Passenger";
import { Stop } from "../stop/Stop";

export type Flight = {
  arrivalTime: Date | null;
  createdAt: Date;
  departureTime: Date | null;
  destination: string | null;
  flightNumber: string | null;
  id: string;
  origin: string | null;
  passengers?: Array<Passenger>;
  stops?: Array<Stop>;
  updatedAt: Date;
};
