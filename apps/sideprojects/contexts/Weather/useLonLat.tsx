import { useEffect, useState } from "react";

export function useGeolocationLonLat(initialState = [18.0686, 59.3293]) {
  const [lonlat, setLonLat] = useState(initialState);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lon = roundn(pos.coords.longitude, 4);
        const lat = roundn(pos.coords.latitude, 4);
        setLonLat([lon, lat]);
      });
    }
  }, []);

  return lonlat;
}

function roundn(x: number, n = 0) {
  const k = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * k) / k;
}
