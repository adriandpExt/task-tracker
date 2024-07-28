import { LoginResponse, Register } from "../../entities/Auth";

export interface IAuthInteractor {
  login(email: string, password: string): Promise<LoginResponse>;
  register(user: Register): Promise<Register>;
}
