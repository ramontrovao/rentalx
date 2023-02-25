import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

export const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecification = new CreateSpecificationService(
    specificationRepository
  );

  createSpecification.execute({ name, description });

  res.status(201).send();
});
