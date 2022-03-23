export interface WeatherDataPoint {
  clouds: {
    /** [0..100] */
    all: number;
  };
  /** utc time in seconds (NOT milliseconds) */
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    /** relative humidity [0..100] */
    humidity: number;
    /** Atmospheric pressure on the ground [hPa] */
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  /** Probability of precipitation [0..1] */
  pop: number;
  /** [mm/3h] */
  rain?: { "3h": number };
  /** [mm/3h] */
  snow?: { "3h": number };
  sys?: {
    pod: string;
  };
  /** Average visibility [m] */
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    /** wind speed [m/s] */
    speed: number;
    /** Wind direction, [degrees]
     *
     * (meteorological, aka where wind is coming from, with north=0 and east=90)
     * */
    deg: number;
    gust: number;
  };
}

export interface WeatherData {
  message: number;
  cod: string;
  cnt: number;
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: WeatherDataPoint[];
}

export const defaultWeatherData: WeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  city: {
    id: 2680662,
    name: "Sala",
    coord: {
      lat: 59.9065,
      lon: 16.3512,
    },
    country: "SE",
    population: 12015,
    timezone: 3600,
    sunrise: 1641973562,
    sunset: 1641997151,
  },
  list: [
    {
      dt: Math.floor(new Date().getTime() / 1000), //1642010400,
      main: {
        temp: 3.51,
        feels_like: -0.25,
        temp_min: 3.51,
        temp_max: 3.8,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1005,
        humidity: 88,
        temp_kf: -0.29,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 4.47,
        deg: 240,
        gust: 16.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-01-12 18:00:00",
    },
  ],
};
