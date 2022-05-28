import { Router } from "express";
import cors from "cors";
import authUser from "#src/middleware/authUser";
import * as token from "#controllers/token";

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

router.get("/", token.generateAccessToken);

router.get("/refresh", authUser, token.generateRefreshToken);
router.delete("/refresh", authUser, token.revokeRefreshToken);

export default router;
