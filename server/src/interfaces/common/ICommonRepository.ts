import { Role, Status } from "../../entities/Common";

export interface ICommonRepository {
  getStatus(): Promise<Status[] | void>;
  getRole(): Promise<Role[] | void>;
}
