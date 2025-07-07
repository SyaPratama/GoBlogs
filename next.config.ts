import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
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
