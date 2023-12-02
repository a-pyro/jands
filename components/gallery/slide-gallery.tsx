import React from 'react'
import { type GalleryProps } from './gallery'
import { type NavItemConfig } from '../nav/nav'
import BlurImage from './blur-image'

interface Props extends GalleryProps, NavItemConfig {
  className?: string
  title?: string
}

const SlideGallery = ({ images, name, route, title, className }: Props) => {
  return (
    <div className="flex gap-3 overflow-x-auto">
      {images.map((image) => (
        <div className="w-56 flex-none">
          {/* <BlurImage key={index} image={image} /> */}
          <img
            src={image.secure_url}
            alt={image.public_id}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default SlideGallery
