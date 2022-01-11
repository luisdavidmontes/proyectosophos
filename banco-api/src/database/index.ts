import { createConnection } from "typeorm";
import "reflect-metadata";
import { User } from "../models/user";
import { Client } from "../models/client";
import { Account } from "../models/account";

export const connection = (async () => {
  return await createConnection({
    name: "default",
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "Salome29.",
    database: "banco",
    entities: [User, Client, Account],
    synchronize: true,
    logging: false,
  });
})();
