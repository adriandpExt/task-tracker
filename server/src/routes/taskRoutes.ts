import express from "express";
import { TaskController } from "../contoller/taskController";
import { TaskInteractor } from "../interactors/TaskInteractor";
import { TaskRepository } from "../repositories/TaskRepository";

const repository = TaskRepository;
const interactor = TaskInteractor(repository);

const controller = TaskController(interactor);

const router = express.Router();

router.get("/tasks", controller.onGetTodos);
router.post("/tasks", controller.onCreateTodo);
router.put("/tasks/:id", controller.onUpdateTodo);
router.delete("/tasks/:id", controller.onRemoveTask);

export default router;
