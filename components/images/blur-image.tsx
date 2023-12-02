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
      href={`/creations/${encodeURIComponent(image.secure_url)}`}
      className="group"
    >
      <Image
        alt={`${image.public_id} picture`}
        src={image.secure_url}
        width={600}
        height={600}
        className={twMerge(
          'image-view-transition rounded-lg duration-700 ease-in-out group-hover:opacity-75',
        )}
      />
    </Link>
  )
}
