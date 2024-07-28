import { Auth, Register } from "../../entities/Auth";

export interface IAuthRepository {
  login(email: string, password: string): Promise<Auth>;
  register(user: Register): Promise<Register>;
}
