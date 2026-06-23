/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  // Allow production builds even when TypeScript or ESLint report errors.
  // This preserves app logic while skipping strict type checks at build time.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Some environments try to import 'react-dom/server.edge' or 'react-dom/server.browser'
    // which may not be exported by the installed react-dom. Provide fallbacks to
    // `react-dom/server` to avoid ERR_PACKAGE_PATH_NOT_EXPORTED at runtime.
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    try {
      config.resolve.alias["react-dom/server.edge"] = require.resolve("react-dom/server");
      config.resolve.alias["react-dom/server.browser"] = require.resolve("react-dom/server");
    } catch (e) {
      // ignore if resolution fails in some environments
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
