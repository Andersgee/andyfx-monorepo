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

router.delete("/", authUser, token.revokeRefreshToken);
router.get("/generate", authUser, token.generateRefreshToken);

router.post("/", token.generateAccessToken);

export default router;
