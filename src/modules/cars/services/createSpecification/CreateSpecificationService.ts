import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationService {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
