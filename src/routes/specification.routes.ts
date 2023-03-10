import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/services/createSpecification/CreateSpecificationController";

export const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);
