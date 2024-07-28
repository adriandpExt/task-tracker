import express from "express";
import { CommonRepository } from "../repositories/CommonRepository";
import { CommonInterator } from "../interactors/CommonInteractor";
import { CommonController } from "../contoller/commonController";

const repository = CommonRepository;
const interactor = CommonInterator(repository);

const controller = CommonController(interactor);

const commonRouter = express.Router();

commonRouter.get("/status", controller.onGetStatus);
commonRouter.get("/role", controller.onGetRole);

export default commonRouter;
