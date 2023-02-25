import { CategoriesRepository } from "../../repositories/CategoriesRespository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
