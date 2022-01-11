import { IRoute, Router } from "express";
import * as controller from "../controllers/account";

const router = Router();

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/:id", controller.deleteAccount);

export default router;
