import { useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ApiCreation } from '@/app/supabase/supabase'

export default function BlurImage({ creation }: { creation: ApiCreation }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={'#'} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={creation.src ?? ''}
          layout="fill"
          objectFit="cover"
          className={twMerge(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {/* <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3> */}
      {/* <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p> */}
    </a>
  )
}
