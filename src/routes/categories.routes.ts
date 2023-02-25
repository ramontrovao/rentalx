import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRespository";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.status(202).json(all);
});
