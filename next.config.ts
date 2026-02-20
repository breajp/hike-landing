import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'campusitba.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'creativestories808.com',
      },
      {
        protocol: 'https',
        hostname: 'lovelytics.com',
      },
    ],
  },
};

export default nextConfig;
