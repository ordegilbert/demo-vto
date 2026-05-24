import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Tells Next.js to export static files
  images: {
    unoptimized: true, // Required for static export to work with <Image /> components
  },
};

export default nextConfig;
