/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
