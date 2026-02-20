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
      {
        protocol: 'https',
        hostname: 'www.b20southafrica.org',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'dpbvj4a9anukr.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
