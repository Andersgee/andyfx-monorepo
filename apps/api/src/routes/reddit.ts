import { Router } from "express";
import cors from "cors";
import { getPath } from "#controllers/reddit";

const router = Router();

const ALLOWED_ORIGINS = [
  "localhost:3002",
  "http://localhost:3002", //SIDEPROJECTS_URL_LOCAL
  "https://web.andyfx.se", //SIDEPROJECTS_URL
];

router.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

router.get("/:path*", getPath);

export default router;
