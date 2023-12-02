'use client'
import {
  useScollResize,
  HEADER_SCOLL_SIZE_INIT,
} from '../header/use-scroll-resize'
import BlurImage from './blur-image'
import { type CloudinaryImage } from '@/utils/cloudinary'

interface Props {
  images: CloudinaryImage[]
}
export default function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {images.map((image) => (
        <BlurImage key={image.public_id} image={image} />
      ))}
    </div>
  )
}

export const GalleryWrapper = ({ images }: Props) => {
  const headerSize = useScollResize(HEADER_SCOLL_SIZE_INIT)
  return (
    <div
      style={{
        marginTop: `${headerSize + 100}px`,
      }}
    >
      <Gallery images={images} />
    </div>
  )
}
