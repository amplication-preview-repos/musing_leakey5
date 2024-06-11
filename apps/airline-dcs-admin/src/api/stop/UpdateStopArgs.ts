import { StopWhereUniqueInput } from "./StopWhereUniqueInput";
import { StopUpdateInput } from "./StopUpdateInput";

export type UpdateStopArgs = {
  where: StopWhereUniqueInput;
  data: StopUpdateInput;
};
