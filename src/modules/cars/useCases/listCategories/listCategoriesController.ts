import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.listCategoriesUseCase.execute();

    return res.status(202).json(all);
  }
}
