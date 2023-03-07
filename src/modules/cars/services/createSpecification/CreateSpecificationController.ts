import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const createSpecificationService = container.resolve(
      CreateSpecificationService
    );

    await createSpecificationService.execute({ name, description });

    res.status(201).send();
  }
}
