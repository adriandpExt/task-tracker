import { PostTaskAssign } from "../entities/TaskAssignment";
import { ITaskAssignmentRepository } from "../interfaces/taskAssignement/ITaskAssignementRepository";
import { ITaskAssignmentInteractor } from "../interfaces/taskAssignement/ITaskAssignmentInteractor";

export const TaskAssignmentInteractor = (
  repository: ITaskAssignmentRepository
): ITaskAssignmentInteractor => {
  const getByUser = async (user: string) => {
    return await repository.getByUser(user);
  };

  const post = async (userId: string, task: PostTaskAssign) => {
    return await repository.post(userId, task);
  };

  return { getByUser, post };
};
