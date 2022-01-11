import { app } from "../config/app";
import AuthRoutes from "./auth";
import ClientRoutes from "./client";
import AccountRoutes from "./account";

export const registerRoutes = () => {
  app.use("/auth", AuthRoutes);
  app.use("/client", ClientRoutes);
  app.use("/account", AccountRoutes);
};
