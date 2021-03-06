const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@andyfx/ui"]);
const svgrconfig = require("@andyfx/configs/webpack-svgr");
const assetsourceconfig = require("@andyfx/configs/webpack-assetsource");

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
    config.module.rules.push(svgrconfig);
    config.module.rules.push(assetsourceconfig);
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withPlugins([withTM], nextConfig);
