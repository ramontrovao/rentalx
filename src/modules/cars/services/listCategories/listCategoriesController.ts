import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesService } from "./listCategoriesService";

export class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const listCategoryService = container.resolve(ListCategoriesService);
    const all = await listCategoryService.execute();

    return res.status(202).json(all);
  }
}
