import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    /* yt says
    remotePatterns: [new URL("https://avatars.githubusercontent.com/**")],
    */

    /* gpt says */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      }
    ]
  },
};

export default nextConfig;
