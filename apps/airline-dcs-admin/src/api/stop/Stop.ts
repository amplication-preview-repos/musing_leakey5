import { Flight } from "../flight/Flight";

export type Stop = {
  airport: string | null;
  arrivalTime: Date | null;
  createdAt: Date;
  departureTime: Date | null;
  flight?: Flight | null;
  id: string;
  updatedAt: Date;
};
