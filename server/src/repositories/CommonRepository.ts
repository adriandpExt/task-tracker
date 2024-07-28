import connection from "../db/connection";
import { Role, Status } from "../entities/Common";
import { ICommonRepository } from "../interfaces/common/ICommonRepository";

export const CommonRepository: ICommonRepository = {
  async getStatus(): Promise<Status[] | void> {
    return new Promise<Status[] | void>((resolve, reject) => {
      const query = "SELECT * FROM status_tbl";

      connection.query(query, (err: Error, results: Status[]) => {
        if (err) {
          reject(new Error(`Failed to get all status: ${err.message}`));
        } else {
          if (results.length === 0) resolve([]);
          else resolve(results);
        }
      });
    });
  },

  async getRole(): Promise<Role[] | void> {
    return new Promise<Role[] | void>((resolve, reject) => {
      const query = "SELECT * FROM roles_tbl";

      connection.query(query, (err: Error, results: Role[]) => {
        if (err) {
          reject(new Error(`Failed to get all role: ${err.message}`));
        } else {
          if (results.length === 0) resolve([]);
          else resolve(results);
        }
      });
    });
  },
};
