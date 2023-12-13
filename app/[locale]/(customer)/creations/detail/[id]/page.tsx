import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { ContactForm } from '@/components/form/contact-form';

const Page = ({ params: { id } }: { params: { id: string } }) => {
  // for now it's url, will be id later
  const decodedUrl = decodeURIComponent(id);
  return (
    <div className="mx-auto mt-5 flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
      <Image
        alt="resin art creation"
        className={twMerge('max-h-[100vh] object-cover object-center')}
        height={600}
        priority
        src={decodedUrl}
        width={600}
      />
      <ContactForm className="place-self-start" imageUrl={decodedUrl} />
    </div>
  );
};
export default Page;
