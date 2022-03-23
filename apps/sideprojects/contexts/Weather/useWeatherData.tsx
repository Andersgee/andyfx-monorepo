import { useEffect, useState } from "react";
import { defaultWeatherData } from "./weatherdata";

const BASEURL = process.env.NEXT_PUBLIC_URL_OPENWEATHERMAP_API;

export function useWeatherData(lon: number, lat: number) {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  useEffect(() => {
    fetch(BASEURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lon, lat }),
    })
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
      })
      .catch((err) => {
        console.log(err);
        //setWeatherData(defaultWeatherData)
      });
  }, [lon, lat]);

  return weatherData;
}
