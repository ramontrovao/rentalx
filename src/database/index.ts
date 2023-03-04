import { AppDataSource } from "./ormconfig";

AppDataSource.initialize()
  .then(() => console.log("Data Source is running!"))
  .catch((err) => console.log("Failed on run Data Source", err));
