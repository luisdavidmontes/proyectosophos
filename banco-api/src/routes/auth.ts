import { IRoute } from "express";
import { AuthController } from "../controllers/auth";

export class AuthRoutes {
  constructor(private router: IRoute, private controller: AuthController) {}
}
