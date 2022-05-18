function localIsoString(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString();
}

/**
 * format date in the form of "2000-01-01 (00:00)"
 */
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
