import fetch from "node-fetch";

const APPID = process.env.OPENWEATHERMAP_APPID;

/**
 * openweathermap api by geographic coordinates
 *
 * @see [documentation](https://openweathermap.org/forecast5)
 */
export async function fetchweather(lon: number, lat: number) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`;
  return await fetch(url).then((res) => res.json());
}
