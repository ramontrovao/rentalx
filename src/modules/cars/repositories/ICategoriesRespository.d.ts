import { Category } from "../modules/cars/model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({}: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}
