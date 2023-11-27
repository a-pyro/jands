'use client'
import { ApiCreation } from '@/app/supabase/types'
import BlurImage from './blur-image'
// import { NextjsLightbox } from './nextjs-lightbox'

export default function Gallery({ creations }: { creations: ApiCreation[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {creations.map((creation) => (
        <BlurImage key={creation.id} creation={creation} />
      ))}
    </div>
  )
}
{
  /* <NextjsLightbox
        slides={creations}
        open={true}
        close={() => setOpen(false)}
      /> */
}
