import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importCategoryService = container.resolve(ImportCategoryService);

    await importCategoryService.execute(file);

    return res.status(201).send();
  }
}
