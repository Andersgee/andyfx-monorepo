/**
 * import .txt .glsl .md as string.
 *
 * @see https://webpack.js.org/guides/asset-modules/
 */
const config = {
  test: /\.(txt|glsl|md)/,
  type: "asset/source",
};

module.exports = config;
