import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create({}: ICreateUserDTO): Promise<void>;
}
