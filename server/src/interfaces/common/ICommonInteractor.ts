import { Role, Status } from "../../entities/Common";

export interface ICommonInterator {
  getStatus(): Promise<Status[] | void>;
  getRole(): Promise<Role[] | void>;
}
