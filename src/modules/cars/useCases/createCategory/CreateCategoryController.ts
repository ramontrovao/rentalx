import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

import { container } from "tsyringe";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });

    return res.status(201).send();
  }
}
