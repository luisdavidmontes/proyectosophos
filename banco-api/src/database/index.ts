import { createConnection } from "typeorm";
import "reflect-metadata";

export const database = createConnection({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "Salome29",
  database: "banco",
  entities: [],
  synchronize: true,
  logging: false,
});
