import fs from "fs";
import { parse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  categories: IImportCategory[] = [];

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          this.categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(this.categories);
        })
        .on("error", (err) => {
          reject(err);
        });

      return this.categories;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;
      const categoryExists = this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
