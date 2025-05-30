import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.allnigerianrecipes.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sisijemimah.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
