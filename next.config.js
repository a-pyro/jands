/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'uvogrrsrsvbxweesxnho.supabase.co',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
// https://uvogrrsrsvbxweesxnho.supabase.co/storage/v1/object/public/allpic/1000024474.jpg
