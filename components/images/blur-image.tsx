'use client'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { type CloudinaryImage } from '@/utils/cloudinary'
// import { useAutoAnimate } from '@formkit/auto-animate/react'
// import { useEffect } from 'react'
type Props = {
  image: CloudinaryImage
  // onClick: () => void
}

export default function BlurImage({ image }: Props) {
  // const [isLoading, setLoading] = useState(true)
  // const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  // useEffect(() => {
  //   enableAnimations(true)

  // return () => {
  //   second
  // }
  // }, [])

  // start view-transtion and push new route
  // const onClick = () => {
  //   setLoading(true)
  //   router.push(`/creations/${encodeURIComponent(image.secure_url)}`)
  // }

  return (
    <Link
      href={`/creations/${encodeURIComponent(image.secure_url)}`}
      className="group"
    >
      <Image
        // onClick={onClick}
        alt={`${image.public_id} picture`}
        src={image.secure_url}
        priority={true}
        width={600}
        height={600}
        className={twMerge(
          'image-view-transition rounded-lg duration-700 ease-in-out group-hover:opacity-75',
          // isLoading
          //   ? 'scale-110 blur-2xl grayscale'
          //   : 'scale-100 blur-0 grayscale-0',
        )}
        // onLoad={() => setLoading(false)}
      />
    </Link>
  )
}
