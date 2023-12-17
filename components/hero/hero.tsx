'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { scrollIntoView } from '@/utils/scroll-into-view'

import { Button } from '../buttons/button'

import { Description, Subtitle, Title } from './text'

const backgroundImageBgUrls = [
  "bg-[url('/hero/1.jpg')]",
  "bg-[url('/hero/2.jpg')]",
  "bg-[url('/hero/3.jpg')]",
  "bg-[url('/hero/4.jpg')]",
  "bg-[url('/hero/5.jpg')]",
]

export const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgroundImageBgUrls.length)
    }, 5000) // Cambia immagine ogni 5 secondi
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={twMerge(
        'flex h-[calc(100dvh-100px)] items-center px-10 pb-32 text-center',
        backgroundImageBgUrls[index],
        'bg-cover bg-center bg-no-repeat transition-all',
      )}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 flex flex-col gap-6">
        <Title text="Arte che risuona con la Natura" />
        <Subtitle text="Scopri l'unicità dell'arte fatta a mano" />
        <Description text="Immergiti in un mondo dove ogni pezzo racconta una storia unica - una fusione tra natura, creatività e amore." />
        <Button
          className="border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => scrollIntoView('necklaces')}
        >
          Esplora le Nostre Creazioni
        </Button>
      </div>
      {/* QUI UIMMAGINI O ALTRA ROBA */}
    </div>
  )
}
