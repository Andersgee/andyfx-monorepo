import { useEffect, useState } from "react";
import { defaultWeatherData } from "./weatherdata";
import api from "lib/api";

export function useWeatherData(lon: number, lat: number) {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  useEffect(() => {
    const getweather = async () => {
      try {
        const json = await api.post("/openweathermap", { lon, lat });
        setWeatherData(json);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getweather();
  }, [lon, lat]);

  return weatherData;
}
