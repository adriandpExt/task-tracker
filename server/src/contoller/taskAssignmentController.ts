import { NextFunction, Request, Response } from "express";
import { ITaskAssignmentInteractor } from "../interfaces/taskAssignement/ITaskAssignmentInteractor";
import { PostTaskAssign } from "../entities/TaskAssignment";

export const TaskAssignmentController = (
  interactor: ITaskAssignmentInteractor
) => {
  const onGetAllTaskAssign = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await interactor.getByUser(req.user?.id as string);

      res.status(200).json({ data, message: `${data.length} items` });
    } catch (error) {
      next(error);
    }
  };

  const onPostTaskAssign = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id as string;
      const { taskId, assignTo } = req.body as PostTaskAssign;
      const postTask = {
        taskId,
        assignTo,
      };
      const data = await interactor.post(userId, postTask);

      res.status(201).json({ data, message: "Successfully created!" });
    } catch (error) {
      next(error);
    }
  };

  return { onGetAllTaskAssign, onPostTaskAssign };
};
