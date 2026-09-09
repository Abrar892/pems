import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 78, 80, 85],
    deviceSizes: [360, 414, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 384, 512],
  },
};

export default nextConfig;
