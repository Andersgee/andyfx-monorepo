const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["ui"]);

//const path = require("path");
//const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    // 2022-04-02: only the ssr and displayName transforms have been implemented.
    // https://nextjs.org/docs/advanced-features/compiler#styled-components
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
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
};

module.exports = withPlugins([withTM], nextConfig);
