import { Router } from "express";
import cors from "cors";
import * as auth from "#controllers/auth";

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

router.post("/", auth.login);
router.delete("/", auth.logout);
router.post("/google", auth.google);
router.post("/signup", auth.signup);

export default router;
