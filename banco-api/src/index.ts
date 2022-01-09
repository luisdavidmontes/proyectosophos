import express from "express";
import { registerRoutes } from "./routes";
import { database } from "./database";

const PORT = 3000;
const app = express();

// Rutas
registerRoutes(app);

// Database Connection
database.then((connection) => {
  app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
  });
});
