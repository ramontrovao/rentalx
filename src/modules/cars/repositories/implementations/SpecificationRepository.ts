import crypto from "node:crypto";
import { Repository } from "typeorm";
import { Specification } from "../../../../entities/Specification";
import AppDataSource from "../../../../database/ormconfig";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const newSpecification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(newSpecification);
  }

  async findByName(name: string) {
    const specificationFound = await this.repository.findOneBy({ name });

    return specificationFound;
  }
}
