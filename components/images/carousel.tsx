'use client'
import { type ApiCreation } from '@/supabase/types'
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
    <section>
      {creations.map(({ src, id }, idx) => (
        <Image
          key={id}
          alt={`${id} picture`}
          src={src}
          fill
          draggable={false}
          priority={true}
          className={twMerge(
            'h-full w-full object-cover duration-700 ease-in-out',
            active === idx ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </section>
  )
}
