/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'uvogrrsrsvbxweesxnho.supabase.co',
        protocol: 'https',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/a-pyro/**',
      },
    ],
  },
  productionBrowserSourceMaps: false,
}

module.exports = withNextIntl(nextConfig)
