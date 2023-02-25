import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const CategoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (CategoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
