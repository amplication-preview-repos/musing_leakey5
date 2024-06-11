import { Flight } from "../flight/Flight";

export type Passenger = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  flight?: Flight | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
