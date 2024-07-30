import { CreateTask, Tasks, UpdateTask } from "../../entities/Task";

export interface ITaskRepository {
  create(userId: string, task: CreateTask): Promise<Tasks>;
  update(id: string, task: UpdateTask, userId?: string): Promise<Tasks>;
  all(): Promise<Tasks[]>;
  remove(id: string): Promise<Tasks | void>;
  getTaskByStatus(statusId: number): Promise<Tasks[] | void>;
}
