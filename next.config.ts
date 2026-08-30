import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
