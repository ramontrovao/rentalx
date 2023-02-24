import { CategoriesRepository } from "../repositories/CategoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const CategoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (CategoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
