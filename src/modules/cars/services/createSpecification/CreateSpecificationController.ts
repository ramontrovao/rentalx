import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const createSpecificationService = container.resolve(
      CreateSpecificationService
    );

    try {
      await createSpecificationService.execute({ name, description });
    } catch {
      res
        .status(500)
        .json({ error: { message: "Specification already exists!" } });
    }

    res.status(201).send();
  }
}
