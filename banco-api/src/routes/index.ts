import type { Express } from "express";
import { AuthController } from "../controllers/auth";
import { AuthRoutes } from "./auth";

export const registerRoutes = (app: Express) => {
  new AuthRoutes(app.route("/auth"), new AuthController());
};
