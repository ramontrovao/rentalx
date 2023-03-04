import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_rentalx",
  username: "docker",
  password: "rentalx",
  database: "rentalx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: [Category],
});
