import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Page({ params: { url } }: { params: { url: string } }) {
  const decoded_url = decodeURIComponent(url)
  return (
    <Image
      alt={`picture`}
      src={decoded_url}
      priority={true}
      width={1200}
      height={1200}
      className={twMerge('image-view-transition mt-10 rounded-lg')}
    />
  )
}
