import React, { createContext } from "react";
import { WeatherData, defaultWeatherData } from "./weatherdata";
import { useWeatherData } from "./useWeatherData";
import { useGeolocationLonLat } from "./useLonLat";

interface Props {
  weatherdata: WeatherData;
}

const defaultValue: Props = {
  weatherdata: defaultWeatherData,
};

export const WeatherContext = createContext(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

export function WeatherProvider({ children }: ProviderProps) {
  const [lon, lat] = useGeolocationLonLat();
  const weatherdata = useWeatherData(lon, lat);

  return <WeatherContext.Provider value={{ weatherdata }}>{children}</WeatherContext.Provider>;
}
