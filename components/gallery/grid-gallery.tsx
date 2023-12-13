import { type CloudinaryImage } from '@/utils/cloudinary';

import { LinkImage } from './link-image';

export type GalleryProps = {
  images: CloudinaryImage[];
};

export const GridGallery = ({ images }: GalleryProps) => {
  return (
    <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <LinkImage image={image} key={image.public_id} />
      ))}
    </div>
  );
};
