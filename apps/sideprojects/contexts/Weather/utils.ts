export function roundn(x: number, n = 0) {
  const k = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * k) / k;
}
