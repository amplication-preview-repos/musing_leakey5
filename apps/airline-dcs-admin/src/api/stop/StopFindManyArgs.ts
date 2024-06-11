import { StopWhereInput } from "./StopWhereInput";
import { StopOrderByInput } from "./StopOrderByInput";

export type StopFindManyArgs = {
  where?: StopWhereInput;
  orderBy?: Array<StopOrderByInput>;
  skip?: number;
  take?: number;
};
