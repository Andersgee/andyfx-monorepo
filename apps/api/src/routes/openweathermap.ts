import { Router } from "express";
import cors from "cors";
import { getWeather } from "#controllers/openweathermap";

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

router.post("/", getWeather);

export default router;
