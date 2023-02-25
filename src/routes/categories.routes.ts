import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRespository";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

export const categoriesRoutes = Router();
categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});
