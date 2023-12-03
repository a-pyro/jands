import BlurImage from './blur-image'
import { type CloudinaryImage } from '@/utils/cloudinary'

export interface GalleryProps {
  images: CloudinaryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <BlurImage
          key={image.public_id}
          image={image}
          className="h-full w-full object-cover"
        />
      ))}
    </div>
  )
}
