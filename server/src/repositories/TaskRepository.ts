import moment from "moment";
import connection from "../db/connection";
import { CreateTask, Tasks, UpdateTask } from "../entities/Task";
import { ITaskRepository } from "../interfaces/task/ITaskRepository";

export const TaskRepository: ITaskRepository = {
  async create(userId: string, task: CreateTask) {
    const { title, description, statusId, assignTo } = task;

    return new Promise<Tasks>((resolve, reject) => {
      const postSQL = `INSERT INTO tasks_tbl (title, description, statusId, assignTo, createdBy) VALUES (?, ?, ?, ?, ?)`;

      connection.query(
        postSQL,
        [title, description, statusId, assignTo, userId],
        (err, _results) => {
          if (err) {
            reject(new Error(`Failed to create task: ${err.message}`));
          } else {
            const newTask = {
              ...task,
              createdBy: userId,
            };

            resolve(newTask);
          }
        }
      );
    });
  },

  async update(id: string, task: UpdateTask, userId: string) {
    const { title, description, dueDate, statusId, assignTo } = task;
    const formatDate = moment(dueDate).format("YYYY-MM-DD");

    return new Promise<Tasks>((resolve, reject) => {
      const putSQL = `
      UPDATE tasks_tbl 
      SET title = ?, description = ?, dueDate = ?, statusId = ?, assignTo = ?, createdBy = ? 
      WHERE id = ?
    `;

      connection.query(
        putSQL,
        [title, description, formatDate, statusId, assignTo, userId, id],
        (err, _results) => {
          if (err) {
            reject(new Error(`Failed to update task: ${err.message}`));
          } else {
            const updatedTodo: UpdateTask = {
              ...task,
              id: id as string,
            };

            resolve(updatedTodo);
          }
        }
      );
    });
  },

  async all() {
    return new Promise<Tasks[]>((resolve, reject) => {
      const query = "SELECT * FROM tasks_tbl";

      connection.query(query, (err: Error | null, results: Tasks[]) => {
        if (err) {
          reject(new Error(`Failed to get all task: ${err.message}`));
        } else {
          if (results.length === 0) {
            resolve([]);
          } else {
            resolve(results);
          }
        }
      });
    });
  },

  async remove(id: string) {
    return new Promise<Tasks | void>((resolve, reject) => {
      const delSQL = "DELETE FROM tasks_tbl WHERE id = ?;";

      connection.query(delSQL, [id], (err) => {
        if (err) {
          reject(new Error(`Failed to delete the task with id: ${id}`));
        } else {
          resolve();
        }
      });
    });
  },
};
