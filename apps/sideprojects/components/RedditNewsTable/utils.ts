/**
 * round x to n decimals
 */
export function roundn(x: number, n = 0) {
  const k = Math.pow(10, n);
  return Math.round((x + Number.EPSILON) * k) / k;
}

export function scoreformat(score: number) {
  if (score > 1000) {
    return `${roundn(score / 1000, 1)}k`;
  } else {
    return `${score}`;
  }
}
