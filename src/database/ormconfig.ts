import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "rentalx",
  database: "rentalx",
  migrations: ["./src/database/migrations/*.ts"],
});
