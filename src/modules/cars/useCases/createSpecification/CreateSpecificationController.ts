import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;
    this.createSpecificationUseCase.execute({ name, description });

    res.status(201).send();
  }
}
