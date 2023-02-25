import { CategoriesRepository } from "../../repositories/CategoriesRespository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
