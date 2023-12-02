import ContactForm from '@/components/contact-form'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Page({ params: { url } }: { params: { url: string } }) {
  const decoded_url = decodeURIComponent(url)
  return (
    <div className="flex flex-col gap-5">
      <Image
        alt={`picture`}
        src={decoded_url}
        priority={true}
        width={1200}
        height={1200}
        className={twMerge('image-view-transition mt-10 w-full')}
      />
      <ContactForm className="place-self-start" />
    </div>
  )
}
