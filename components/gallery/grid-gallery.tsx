import LinkImage from './link-image'
import { type CloudinaryImage } from '@/utils/cloudinary'

export interface GalleryProps {
  images: CloudinaryImage[]
}

export default function GridGallery({ images }: GalleryProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <LinkImage key={image.public_id} image={image} />
      ))}
    </div>
  )
}
