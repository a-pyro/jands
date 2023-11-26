'use client'
import { useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ApiCreation } from '@/app/supabase/types'
import Link from 'next/link'

interface Props {
  creation: ApiCreation
  onClick?: () => void
}
export default function BlurImage({ creation, onClick }: Props) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link href={'#'} className="group">
      <div className="max-w-xl rounded-lg bg-gray-200">
        <Image
          onClick={onClick}
          alt={`${creation.id} picture`}
          src={creation.src}
          priority={true}
          width={600}
          height={600}
          className={twMerge(
            'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
      {/* <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3> */}
      {/* <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p> */}
    </Link>
  )
}
