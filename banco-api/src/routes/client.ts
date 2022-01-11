import { Router } from "express";
import * as controller from "../controllers/client";

const router = Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/", controller.deleteClient);
export default router;
