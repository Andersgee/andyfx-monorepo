import { Router } from "express";
import * as user from "#controllers/user";
import authUser from "#middleware/authUser";

//import { UserModel } from "#src/models/user";
//import * as crud from "#src/controllers/crud";

const router = Router();

router.get("/", authUser, user.readMe);
router.patch("/", authUser, user.updateMe);
router.delete("/", authUser, user.removeMe);
router.get("/list", user.readListPublic);
router.get("/:id", user.readPublic);

/*
router.post("/:id", authAdmin, (req, res) => crud.create(UserModel, req, res));
router.get("/:id", authAdmin, (req, res) => crud.read(UserModel, req, res));
router.patch("/:id", authAdmin, (req, res) => crud.update(UserModel, req, res));
router.delete("/:id", authAdmin, (req, res) => crud.remove(UserModel, req, res));
*/

export default router;
