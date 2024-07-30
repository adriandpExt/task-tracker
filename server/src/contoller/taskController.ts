import { NextFunction, Request, Response } from "express";
import { UpdateTask, CreateTask } from "../entities/Task";
import { ITaskInteractor } from "../interfaces/task/ITaskInteractor";

export const TaskController = (interactor: ITaskInteractor) => {
  const onGetTodos = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await interactor.all();

      res.status(200).json({ data, message: `${data.length} item/s` });
    } catch (error) {
      next(error);
    }
  };

  const onUpdateTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id;
      const { title, description, dueDate, statusId, assignTo, createdBy } =
        req.body as UpdateTask;

      const updatedDetails: UpdateTask = {
        title,
        description,
        dueDate,
        statusId,
        assignTo,
        createdBy,
      };

      const data = await interactor.update(
        req.params.id,
        updatedDetails,
        userId
      );

      return res.status(200).json({
        data,
        message: "Task updated successfully.",
      });
    } catch (error) {
      next(error);
    }
  };

  const onCreateTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id as string;
      const { title, description, statusId, assignTo } = req.body as CreateTask;

      const taskDetail: CreateTask = {
        title,
        description,
        statusId,
        assignTo,
      };

      const data = await interactor.create(userId, taskDetail);

      return res.status(201).json({
        data,
        message: "Task created successfully.",
      });
    } catch (error) {
      next(error);
    }
  };

  const onRemoveTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;

      const data = interactor.remove(id);

      res.status(200).json({
        data,
        message: `Successfully remove task with id: ${id}`,
      });
    } catch (error) {
      next(error);
    }
  };

  const onGetTaskByStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const statusId = parseInt(req.query.statusId as string, 10);

      if (isNaN(statusId)) {
        return res.status(400).json({ message: "Invalid statusId" });
      }

      if (statusId >= 5) {
        return res.status(404).json({ message: "Invalid statusId" });
      }

      const data = await interactor.getTaskByStatus(statusId);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  return {
    onGetTodos,
    onUpdateTodo,
    onCreateTodo,
    onRemoveTask,
    onGetTaskByStatus,
  };
};
