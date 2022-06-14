import { attributeValues } from "./utils";

test("regex grab paint svg attribute values from string", () => {
  const svg = '<rect width="100" height="100" fill="red"/><circle cx="10" cy="40" r="20" fill="#0f0" stroke="#000"/>';
  const array = attributeValues(svg, ["fill", "stroke"]);
  expect(array).toStrictEqual(["red", "#0f0", "#000"]);
});
