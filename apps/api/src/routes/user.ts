import { Router } from "express";
import cors from "cors";
import * as user from "#controllers/user";
import { UserModel } from "#src/models/user";
import * as crud from "#src/controllers/crud";

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

router.get("/all", user.readAll);

router.get("/", user.getMe);
router.patch("/", user.updateMe);

router.get("/:id", (req, res) => crud.read(UserModel, req, res));
router.patch("/:id", user.update);
router.delete("/:id", (req, res) => crud.remove(UserModel, req, res));

export default router;
