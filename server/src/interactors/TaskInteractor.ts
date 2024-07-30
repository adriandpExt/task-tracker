import { CreateTask, Tasks, UpdateTask } from "../entities/Task";
import { ITaskInteractor } from "../interfaces/task/ITaskInteractor";
import { ITaskRepository } from "../interfaces/task/ITaskRepository";

import { LogMessage } from "../utils/logMessage";

export const TaskInteractor = (
  repository: ITaskRepository
): ITaskInteractor => {
  const create = async (userId: string, task: CreateTask) => {
    if (!task) {
      throw new Error("All filled must not be empty!");
    }

    const taskDetails = JSON.stringify(task);

    LogMessage(`Attempt to create task ${taskDetails} for userId: ${userId} `);

    return await repository.create(userId, task);
  };

  const update = async (id: string, task: UpdateTask, userId: string) => {
    if (!task) {
      throw new Error("Task details must not be empty!");
    }
    const taskDetails = JSON.stringify(task);

    LogMessage(
      `The user ${userId} attempt to update ${taskDetails} task for Id: ${id} `
    );

    return await repository.update(id, task, userId);
  };

  const all = async () => {
    return await repository.all();
  };

  const remove = async (id: string) => {
    if (!id) {
      throw { statusCode: 404, message: `Task with ID: ${id} not found!` };
    }

    LogMessage(`The taskId:${id}  is remove`);

    return await repository.remove(id);
  };

  const getTaskByStatus = async (statusId: number) => {
    if (!statusId) {
      throw {
        statusCode: 404,
        message: `Task with ID: ${statusId} not found!`,
      };
    }

    return await repository.getTaskByStatus(statusId);
  };

  return {
    create,
    update,
    all,
    remove,
    getTaskByStatus,
  };
};
