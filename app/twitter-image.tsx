/* eslint-disable @next/next/no-img-element -- no need for metada*/
import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'About JandS'

export const size = {
  width: 300,
  height: 200,
}

export const contentType = 'image/png'

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        className="bg-primary"
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          alt={alt}
          className="h-full w-full object-cover"
          src={`${process.env.NEXT_PUBLIC_APP_URL}/seo/twitter-image.png`}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
