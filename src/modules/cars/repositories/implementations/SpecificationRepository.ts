import crypto from "node:crypto";
import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
      id: crypto.randomUUID(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specificationFound = this.specifications.find(
      (specification) => specification.name === name
    );

    return specificationFound;
  }
}
