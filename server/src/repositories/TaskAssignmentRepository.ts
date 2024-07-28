import { QueryError, RowDataPacket } from "mysql2";
import connection from "../db/connection";

import {
  PostTaskAssign,
  TaskAssignment,
  TaskAssignmentByUser,
} from "../entities/TaskAssignment";
import { ITaskAssignmentRepository } from "../interfaces/taskAssignement/ITaskAssignementRepository";

export const TaskAssignmentRepository: ITaskAssignmentRepository = {
  async getByUser(user: string): Promise<TaskAssignmentByUser[]> {
    return new Promise<TaskAssignmentByUser[]>((resolve, reject) => {
      const query =
        "SELECT t.id AS taskId, t.title, t.description, t.dueDate, t.statusId FROM tasks_tbl t LEFT JOIN task_assignment_tbl ta ON t.id = ta.taskId WHERE ta.assignTo = ?";

      connection.query(
        query,
        [user],
        (err: QueryError | null, results: RowDataPacket[]) => {
          if (err) {
            reject(new Error(`Failed to get all tasks: ${err.message}`));
          } else {
            const taskAssignments: TaskAssignmentByUser[] = results.map(
              (row: RowDataPacket) => ({
                taskId: row.taskId,
                title: row.title,
                description: row.description,
                dueDate: row.dueDate,
                statusId: row.statusId,
              })
            );
            resolve(taskAssignments);
          }
        }
      );
    });
  },

  async post(userId: string, task: PostTaskAssign) {
    const { assignTo, taskId } = task;
    return new Promise<TaskAssignment>((resolve, reject) => {
      const postSQL = `INSERT INTO task_assignment_tbl (taskId, assignTo, assignBy) VALUES (?, ?, ?)`;

      connection.query(postSQL, [taskId, assignTo, userId], (err, _results) => {
        if (err) {
          reject(new Error(`Failed to create task: ${err.message}`));
        } else {
          const newAssign: TaskAssignment = {
            ...task,
            assignBy: userId,
          };
          resolve(newAssign);
        }
      });
    });
  },
};
