const withTM = require("next-transpile-modules")([
  // "zepp/packages/utils",
  // "zepp/packages/react",
]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const redirects = require("./redirects.json");

const path = require("path");

module.exports = withBundleAnalyzer(
  withTM({
    async redirects() {
      return redirects || [];
    },
    experimental: {
      reactRoot: true,
      // runtime: 'experimental-edge',
    },
    webpack(config, { webpack }) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      });
      // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__/));
      // config.resolve.alias["@zepp/react"] = "zepp/packages/react/";
      // config.resolve.alias["@zepp/utils"] = "zepp/packages/utils/";
      config.resolve.alias.react = path.resolve("./node_modules/react");
      // Object.assign(config.resolve.alias, {
      //   react: 'preact/compat',
      //   'react-dom/test-utils': 'preact/test-utils',
      //   'react-dom': 'preact/compat',
      // });
      return config;
    },
    productionBrowserSourceMaps: true,
  })
);
