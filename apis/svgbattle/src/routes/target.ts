import { Router } from "express";
import cors from "cors";
import { TargetModel } from "#models/target";
import * as target from "#controllers/target";
import * as crud from "#controllers/crud";
import authUser from "#middleware/authUser";

const router = Router();

router.get("/", target.readAll);
router.post("/", authUser, target.create);
router.patch("/:id", authUser, target.update);
//router.delete("/", authAdmin, target.removeAll);

router.get("/shortId/:shortId", target.readShortId);
router.get("/:id", (req, res) => crud.read(TargetModel, req, res));
/*
router.patch("/:id",  authAdmin, (req, res) => crud.update(TargetModel, req, res));
router.delete("/:id", authAdmin, (req, res) => crud.remove(TargetModel, req, res));
*/

export default router;
