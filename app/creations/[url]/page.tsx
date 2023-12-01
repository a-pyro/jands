import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Page({ params: { url } }: { params: { url: string } }) {
  console.log('🚀 ~ url:', url)
  const decoded_url = decodeURIComponent(url)
  console.log('🚀 ~ decoded_url:', decoded_url)
  return (
    <Image
      // onClick={onClick}
      alt={`picture`}
      src={decoded_url}
      priority={true}
      width={1200}
      height={1200}
      className={twMerge(
        'blur-img rounded-lg duration-700 ease-in-out group-hover:opacity-75',
        // isLoading
        //   ? 'scale-110 blur-2xl grayscale'
        //   : 'scale-100 blur-0 grayscale-0',
      )}
      // onLoad={() => setLoading(false)}
    />
  )
}
