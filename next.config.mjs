/** @type {import('next').NextConfig} */

// import withPlugins from "next-compose-plugins";
// const optimizedImages from "next-optimized-images";

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "cdn.icon-icons.com",
      "cdn-icons-png.flaticon.com",
      "toppng.com",
      "static-00.iconduck.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            dimensions: false,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
