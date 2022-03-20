import express, { Request, Response } from "express";
import cors from "cors";
import { fetchweather } from "./openweathermap";

const router = express.Router();
export default router;

const ALLOWED_ORIGINS = [
  "http://localhost:3002", //SIDEPROJECTS_URL_LOCAL
  "https://web.andyfx.se", //SIDEPROJECTS_URL
];

router.use(
  cors({
    origin: ALLOWED_ORIGINS,
  })
);

//router.use(cors());

router.get("/", async (req: Request, res: Response) => {
  try {
    const lon = req.body.lon as number;
    const lat = req.body.lon as number;
    const r = await fetchweather(lon, lat);
    //console.log("r:", r);
    return res.status(200).json(r);
  } catch (err) {
    return res.status(401);
  }
});
