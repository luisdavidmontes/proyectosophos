import { app } from "../config/app";
import AuthRoutes from "./auth";
import ClientRoutes from "./client";
import AccountRoutes from "./account";
import RegistryRoutes from "./registry";
import { authenticate } from "../middlewares/authenticate";

export const registerRoutes = () => {
  app.use("/auth", AuthRoutes);
  app.use("/client", authenticate, ClientRoutes);
  app.use("/account", authenticate, AccountRoutes);
  app.use("/registry", authenticate, RegistryRoutes);
};
