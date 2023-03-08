import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importCategoryService = container.resolve(ImportCategoryService);

    try {
      await importCategoryService.execute(file);
    } catch {
      return res.status(400).json({
        error: { message: "At least one of categories already exists!" },
      });
    }

    return res.status(201).send();
  }
}
