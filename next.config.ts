import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
  allowedDevOrigins: ['10.11.136.244'],
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'motion',
      'react-hotkeys-hook',
    ]
  }
};

export default nextConfig;
