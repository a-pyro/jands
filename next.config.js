/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/jands-art/**',
      },
    ],
  },
  productionBrowserSourceMaps: false,
}

module.exports = withNextIntl(nextConfig)
