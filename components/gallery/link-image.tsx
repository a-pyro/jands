import { type ClassNameValue, twMerge } from 'tailwind-merge'
import { type CloudinaryImage } from '@/utils/cloudinary'
import { Link } from '@/utils/navigation'

type Props = {
  image: CloudinaryImage
  className?: ClassNameValue
}

export default function LinkImage({ image, className = '' }: Props) {
  return (
    <Link
      className="overflow-hidden"
      href={`/creations/detail/${encodeURIComponent(image.secure_url)}`}
      draggable={false}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={`${image.public_id} picture`}
        src={image.secure_url}
        draggable={false}
        className={twMerge(
          'h-full w-full object-cover duration-300 ease-in-out hover:scale-105 hover:cursor-pointer',
          className,
        )}
      />
    </Link>
  )
}
