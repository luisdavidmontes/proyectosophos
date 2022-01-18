import { Router } from "express";
import * as controller from "../controllers/registry";

const router = Router();

router.get("/:id", controller.getByClient);

export default router;
