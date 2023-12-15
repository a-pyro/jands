import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JandS Handmade Resin Art',
    short_name: 'JandS Ard',
    description:
      'JandS Handmade Resin Art - Resin Art, Resin Jewellery, Resin Homewares, Resin Art Workshops',
    start_url: '/',
    display: 'standalone',
    background_color: 'rgb(245, 245, 245)',
    theme_color: 'rgb(0, 93, 102)',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
