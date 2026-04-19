import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Sajikan /aksara tanpa ekstensi .html — lebih bersih untuk SEO
      {
        source: '/aksara',
        destination: '/aksara.html',
      },
    ];
  },
};

export default nextConfig;
