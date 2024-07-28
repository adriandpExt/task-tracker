import bcrypt from "bcrypt";
import { LoginResponse, User, Register } from "../entities/Auth";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";
import { IAuthRepository } from "../interfaces/auth/IAuthRepository";
import { hashedPassword, generateToken } from "../utils/auth";

export const AuthInterators = (
  repository: IAuthRepository
): IAuthInteractor => {
  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    if (!email || !password) {
      throw { statusCode: 400, message: "Email and password are required!" };
    }

    const users = await repository.login(email, password);
    if (!users) {
      throw { statusCode: 404, message: "User not found!" };
    }

    const isPasswordValid = await hashedPassword(password, users.password);
    if (!isPasswordValid) {
      throw { statusCode: 400, message: "Invalid credentials!" };
    }
    const user: User = {
      email: users.email,
      userId: users.id as string,
    };
    const accessToken = generateToken(user);
    const data: LoginResponse = {
      token: accessToken,
      email: users.email,
      id: users.id as string,
    };

    return data;
  };

  const register = async (user: Register): Promise<Register> => {
    if (!user) {
      throw { statusCode: 400, message: "All field must not null!" };
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    if (!hashedPassword) {
      throw { statusCode: 404, message: "Invalid credentials!" };
    }
    const userReg: Register = {
      ...user,
      password: hashedPassword,
    };

    const reguser = await repository.register(userReg);
    if (!reguser) {
      throw { statusCode: 404, message: "Invalid credentials!" };
    }

    return reguser;
  };

  return { login, register };
};
