import { Repository } from "typeorm";
import { User } from "../../../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import AppDataSource from "../../../../database/ormconfig";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateUserDTO) {
    const user = this.repository.create({
      name,
      email,
      username,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}
