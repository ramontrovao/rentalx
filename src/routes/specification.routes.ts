import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

export const specificationRoutes = Router();
specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});
