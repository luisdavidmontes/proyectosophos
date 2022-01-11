import { app, PORT } from "./config/app";
import { connection } from "./database";
import { registerRoutes } from "./routes";

async function main() {
  await connection;
  await registerRoutes();
  await app.listen(PORT);
  console.log(`Listen on port ${PORT}`);
}

main();
