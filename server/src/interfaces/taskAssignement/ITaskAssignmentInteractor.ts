import {
  PostTaskAssign,
  TaskAssignment,
  TaskAssignmentByUser,
} from "../../entities/TaskAssignment";

export interface ITaskAssignmentInteractor {
  getByUser(user: string): Promise<TaskAssignmentByUser[]>;
  post(userId: string, task: PostTaskAssign): Promise<TaskAssignment>;
}
