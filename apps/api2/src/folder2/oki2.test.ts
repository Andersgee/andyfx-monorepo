import { oki2 } from "./oki2";

function sum(a: number, b: number) {
  return a + b;
}

interface Apa {
  k: number;
  yep: string;
}

test("some function", () => {
  const a: Apa = { k: 5, yep: "hmm" };
  expect(sum(2, 3)).toBe(a.k);
});

test("some function3", () => {
  //const a: Apa = { k: 5, yep: "hmm" };
  expect(sum(2, 3)).toBe(5);
});

test("some function3", () => {
  //const a: Apa = { k: 5, yep: "hmm" };
  expect(sum(4, 3)).toBe(7);
});
