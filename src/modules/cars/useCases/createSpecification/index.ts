import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
