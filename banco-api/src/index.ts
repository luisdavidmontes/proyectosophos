import express from "express";
import { registerRoutes } from "./routes";

const PORT = 3000;
const app = express();

// Rutas
registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
