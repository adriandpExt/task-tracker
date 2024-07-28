import { Response, Request, NextFunction } from "express";
import { ICommonInterator } from "../interfaces/common/ICommonInteractor";

export const CommonController = (interactor: ICommonInterator) => {
  const onGetStatus = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await interactor.getStatus();

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  const onGetRole = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await interactor.getRole();

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
  return { onGetStatus, onGetRole };
};
