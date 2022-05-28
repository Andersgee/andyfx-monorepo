import { Router } from "express";
import cors from "cors";
import * as user from "#controllers/user";
import { UserModel } from "#src/models/user";
import * as crud from "#src/controllers/crud";
import authUser from "#middleware/authUser";

const router = Router();

const ALLOWED_ORIGINS = [
  "http://localhost:3002", //SIDEPROJECTS_URL_LOCAL
  "https://web.andyfx.se", //SIDEPROJECTS_URL
];

router.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

//router.get("/all", user.readAll);

router.get("/", authUser, user.readMe);
router.patch("/", authUser, user.updateMe);
router.delete("/", authUser, user.removeMe);

router.get("/:id", user.readPublic);

router.get("/list", user.readList);

/*
router.post("/:id", authAdmin, (req, res) => crud.create(UserModel, req, res));
router.get("/:id", authAdmin, (req, res) => crud.read(UserModel, req, res));
router.patch("/:id", authAdmin, (req, res) => crud.update(UserModel, req, res));
router.delete("/:id", authAdmin, (req, res) => crud.remove(UserModel, req, res));
*/

export default router;
