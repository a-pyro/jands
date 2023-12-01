'use client'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { type CloudinaryImage } from '@/utils/cloudinary'

type Props = {
  image: CloudinaryImage
  // onClick: () => void
}

export default function BlurImage({ image }: Props) {
  // const [isLoading, setLoading] = useState(true)

  return (
    <Link href={'#'} className="group">
      <Image
        // onClick={onClick}
        alt={`${image.public_id} picture`}
        src={image.secure_url}
        priority={true}
        width={600}
        height={600}
        className={twMerge(
          'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
          // isLoading
          //   ? 'scale-110 blur-2xl grayscale'
          //   : 'scale-100 blur-0 grayscale-0',
        )}
        // onLoad={() => setLoading(false)}
      />
      {/* <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3> */}
      {/* <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p> */}
    </Link>
  )
}
