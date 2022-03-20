const withTM = require("next-transpile-modules")(["ui"]);
//const path = require("path");
//const isDev = process.env.NODE_ENV !== "production";

module.exports = withTM({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false, cleanupIDs: false, prefixIds: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    //see: https://webpack.js.org/guides/asset-modules/
    config.module.rules.push({
      test: /\.glsl|txt/,
      type: "asset/source",
    });

    return config;
  },
});
