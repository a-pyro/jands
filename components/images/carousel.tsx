'use client'
import { ApiCreation } from '@/app/supabase/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Carousel({ creations }: { creations: ApiCreation[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const intervallo = setInterval(() => {
      setActive((active + 1) % creations.length)
    }, 3000) // Cambia ogni 3 secondi
    return () => clearInterval(intervallo)
  }, [active, creations.length])

  return (
    <div className="mx-auto flex ">
      {creations.map(({ src, id }, idx) => (
        <Image
          key={id}
          alt={`${id} picture`}
          src={src}
          priority={true}
          width={700}
          height={700}
          className={twMerge(
            'duration-700 ease-in-out',
            active === idx ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </div>
  )
}
