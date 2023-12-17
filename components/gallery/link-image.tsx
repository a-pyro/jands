import { type ClassNameValue, twMerge } from 'tailwind-merge'

import { type CloudinaryImage } from '@/utils/cloudinary'
import { Link } from '@/utils/navigation'

type Props = {
  image: CloudinaryImage
  className?: ClassNameValue
}

export const LinkImage = ({ image, className = '' }: Props) => {
  return (
    <Link
      className="overflow-hidden"
      draggable={false}
      href={`/creations/detail/${encodeURIComponent(image.secure_url)}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- dont wanna use next image*/}
      <img
        alt={`${image.public_id} creation`}
        className={twMerge(
          'h-full w-full object-cover object-center',
          'md:duration-300 md:ease-in-out  md:hover:scale-110 md:hover:cursor-pointer',
          className,
        )}
        draggable={false}
        src={image.secure_url}
      />
    </Link>
  )
}
