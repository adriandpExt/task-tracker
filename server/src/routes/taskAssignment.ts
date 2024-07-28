import express from "express";
import { TaskAssignmentRepository } from "../repositories/TaskAssignmentRepository";
import { TaskAssignmentController } from "../contoller/taskAssignmentController";
import { TaskAssignmentInteractor } from "../interactors/TaskAssignmentInteractor";

const taskAssignmentRouter = express.Router();

const repository = TaskAssignmentRepository;

const interactor = TaskAssignmentInteractor(repository);

const controller = TaskAssignmentController(interactor);

taskAssignmentRouter.get("/assign/:id", controller.onGetAllTaskAssign);
taskAssignmentRouter.post("/assign", controller.onPostTaskAssign);

export default taskAssignmentRouter;
