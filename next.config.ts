import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. MUST be at the root level of your configuration object, NOT inside experimental
  htmlLimitedBots: /.*/,

  allowedDevOrigins: ['192.168.43.103'],
};

export default nextConfig;
