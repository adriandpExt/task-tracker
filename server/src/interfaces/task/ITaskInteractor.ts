import { CreateTask, Tasks, UpdateTask } from "../../entities/Task";

export interface ITaskInteractor {
  create(userId: string, task: CreateTask): Promise<Tasks>;
  update(id: string, task: UpdateTask, userId?: string): Promise<Tasks>;
  all(): Promise<Tasks[]>;
}
