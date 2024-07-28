import { RowDataPacket } from "mysql2";
import { IAuthRepository } from "../interfaces/auth/IAuthRepository";
import connection from "../db/connection";
import { Auth, Register } from "../entities/Auth";

export const AuthRepository: IAuthRepository = {
  async login(email: string): Promise<Auth> {
    return new Promise<Auth>((resolve, reject) => {
      connection.query(
        "SELECT * FROM users_tbl WHERE email = ?",
        [email],
        (err, results: RowDataPacket[]) => {
          if (err) {
            reject(new Error(`Database error: ${err.message}`));
          } else {
            resolve(results[0] as Auth);
          }
        }
      );
    });
  },

  register(user: Register) {
    return new Promise<Register>((resolve, reject) => {
      const { fullname, email, password } = user;

      const postSQL = `INSERT INTO users_tbl (fullname, email, password, roleId) VALUES (?, ?, ?, ?)`;
      connection.query(
        postSQL,
        [fullname, email, password, 3],
        (err, _results) => {
          if (err) {
            reject(new Error(`Failed to register ${err.message}`));
          } else {
            const newAccount: Register = {
              fullname: fullname,
              email: email,
              password: password,
            };
            resolve(newAccount);
          }
        }
      );
    });
  },
};
