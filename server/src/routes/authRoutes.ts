import express from "express";
import { AuthController } from "../contoller/authController";
import { AuthInterators } from "../interactors/AuthInteractors";
import { AuthRepository } from "../repositories/AuthRepository";

const repository = AuthRepository;
const interactor = AuthInterators(repository);

const controller = AuthController(interactor);

const router = express.Router();

router.post("/login", controller.onLogin);
router.post("/register", controller.onRegister);

export default router;
