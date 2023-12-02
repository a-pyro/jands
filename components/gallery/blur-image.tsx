import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { type CloudinaryImage } from '@/utils/cloudinary'

type Props = {
  image: CloudinaryImage
}

export default function BlurImage({ image }: Props) {
  return (
    <Link
      className="overflow-hidden"
      href={`/creations/${encodeURIComponent(image.secure_url)}`}
    >
      <Image
        alt={`${image.public_id} picture`}
        src={image.secure_url}
        width={600}
        height={600}
        className={twMerge(
          'image-view-transition  duration-300 ease-in-out hover:scale-105 hover:cursor-pointer ',
        )}
      />
    </Link>
  )
}
