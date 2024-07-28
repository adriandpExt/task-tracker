import { Request, Response, NextFunction } from "express";
import { Auth, Register } from "../entities/Auth";
import { IAuthInteractor } from "../interfaces/auth/IAuthInteractor";

export const AuthController = (interactor: IAuthInteractor) => {
  const onLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body as Auth;

      const data = await interactor.login(email, password);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  const onRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { fullname, email, password } = req.body as Register;

      const user: Register = {
        fullname,
        email,
        password,
      };

      const data = await interactor.register(user);

      return res.status(200).json({
        data,
        message: "Successfully registered!",
      });
    } catch (error) {
      next(error);
    }
  };

  return { onLogin, onRegister };
};
