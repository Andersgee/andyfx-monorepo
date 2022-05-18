/**
 * The amount of water [kg/m3] that air can *maximally* hold at a given temperature
 */
function saturationdensity(tempCelsius: number) {
  const T = tempCelsius + 273.15;
  const density = ((0.0022 / T) * Math.exp(77.345 + 0.0057 * T - 7235 / T)) / Math.pow(T, 8.2);
  return density;
}

/**
 * The amount of water [kg/m3] that air holds at given temperature and humidity
 */
function waterdensity(tempCelsius: number, relativeHumidity: number) {
  return relativeHumidity * saturationdensity(tempCelsius);
}

/**
 * The surface temperature [C] required to produce water droplets on the surface
 *
 * t: air temperature [C]
 * rh: relative humidity [0..1]
 *
 * what is dewpoint?
 * water will condense when air cools through contact with a surface if the surface is sufficiently cold
 * (simply because colder air can carry less water than hot air. (carry as in actual kg/m3)
 * this often happens in the morning when the surface/ground is colder than the air.
 */
export function dewpoint(tempCelsius: number, relativeHumidity: number) {
  const dens = waterdensity(tempCelsius, relativeHumidity);
  //decrease temperature until relative humidity > 1
  //which happens when current waterdensity is more than saturationdensity (at the lower temp)
  for (let x = tempCelsius; (x -= 1); x > -40) {
    if (saturationdensity(x) < dens) {
      return x;
    }
  }
  return -40;
}

/**
 * How a tree gets water. layman description (see transpiration stream):
 * Water is pulled from leaves. (its not "pushed" from roots)
 * The rate of water pull depends on how fast the leaves are losing water.
 *
 * How fast are leaves losing water then?
 * Leaves have pores with humid air, usually on the underside of leaves (see stomata)
 * The rate at which this humid air "leaks" (see gas exchange) out of the leaf is proportional to
 * the *difference in water concentration* of the air on inside/outside leaf.
 *
 * So estimate a water concentration on the inside and outside.
 * The difference between them directly correlate with how much water is lost,
 * and (if roots are active) how much a tree will "dry out" the soil in its pot.
 *
 * notes:
 * According to (some reference here) the relative humidity inside the leaf tries to stay at 99.3%
 * airpressure is technically involved in these calculations but the atmospheric pressure change (which does exist)
 * are insignificant to the outcome.
 */
export function densitydifference(airtemperature: number, relativehumidity: number) {
  const density_air = waterdensity(airtemperature, relativehumidity);
  const density_stomata = waterdensity(airtemperature, 0.993);

  const difference = density_stomata - density_air; //[kg/m3]

  return difference * 1000; //[g/m3]
}

function localIsoString(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString();
}

export function dateformat(date: Date) {
  const [d, t] = localIsoString(date).split("T");
  return `${d} (${t.slice(0, 5)})`;
}

/**
 * [year,month,day, hh,mm,ss]
 */
export function dateformatsplit(date: Date) {
  const [d, t] = localIsoString(date).split("T");
  const [year, month, day] = d.split("-");
  const [hh, mm, ss] = t.split(":");
  return [year, month, day, hh, mm, ss];
}

/**
 * round x to n decimals, return string including trailing zero
 *
 * ```js
 * roundnstr(2.04, 1) => "2.0" //str with trailing zeros
 * ```
 */
export function roundnstr(x: number, n = 0) {
  const k = Math.pow(10, n);
  const r = Math.round((x + Number.EPSILON) * k) / k;
  return r.toFixed(n);
}
