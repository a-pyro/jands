import ContactForm from '@/components/contact-form'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Page({ params: { url } }: { params: { url: string } }) {
  const decoded_url = decodeURIComponent(url)
  return (
    <div className="mx-auto mt-5 flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
      <Image
        alt={`picture`}
        src={decoded_url}
        priority={true}
        width={600}
        height={600}
        className={twMerge('max-h-[100vh] object-cover object-center')}
      />
      <ContactForm className="place-self-start" imageUrl={decoded_url} />
    </div>
  )
}
