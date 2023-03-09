import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, username, password, driver_license } = req.body;
    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name,
      email,
      username,
      password,
      driver_license,
    });

    return res.status(201).send();
  }
}
