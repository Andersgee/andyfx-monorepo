import { Router } from "express";
import { getWeather } from "#controllers/openweathermap";

const router = Router();

router.post("/", getWeather);

export default router;
