import { Stop as TStop } from "../api/stop/Stop";

export const STOP_TITLE_FIELD = "airport";

export const StopTitle = (record: TStop): string => {
  return record.airport?.toString() || String(record.id);
};
