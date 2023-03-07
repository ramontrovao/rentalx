import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
  handle(req: Request, res: Response): Response {
    const { file } = req;
    const importCategoryService = container.resolve(ImportCategoryService);

    importCategoryService.execute(file);

    return res.send();
  }
}
