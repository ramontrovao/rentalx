import { Router } from "express";
import { CreateUserController } from "../modules/accounts/services/CreateUser/CreateUserController";

export const userRoutes = Router();
const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);
