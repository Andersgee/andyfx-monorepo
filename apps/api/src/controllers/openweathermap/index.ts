import { Request, Response } from "express";
import { fetchweather } from "./openweathermap";

export async function getWeather(req: Request, res: Response) {
  try {
    const lon = req.body.lon as number;
    const lat = req.body.lat as number;
    fetchweather(lon, lat)
      .then((weatherResponse) => {
        return res.status(200).json(weatherResponse);
      })
      .catch(() => {
        return res.status(409).json({ message: "Something went wrong." });
      });
  } catch (err) {
    return res.status(401).json({ message: "Something went wrong." });
  }
}
