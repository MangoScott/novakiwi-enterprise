import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/novakiwi-enterprise',
  assetPrefix: '/novakiwi-enterprise/',
};

export default nextConfig;
