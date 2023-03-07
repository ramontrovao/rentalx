import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_rentalx",
  username: "docker",
  password: "rentalx",
  database: "rentalx",
  migrations: [__dirname + "/migrations/*.ts"],
  entities: ["./src/entities/*.ts"],
});
