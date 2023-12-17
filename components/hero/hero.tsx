'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { scrollIntoView } from '@/utils/ui'

import { Button } from '../buttons/button'

import { Subtitle, Title } from './text'

const backgroundImageBgUrls = [
  "bg-[url('/hero/1.jpg')]",
  "bg-[url('/hero/2.jpg')]",
  "bg-[url('/hero/3.jpg')]",
  "bg-[url('/hero/4.jpg')]",
  "bg-[url('/hero/5.jpg')]",
  "bg-[url('/hero/6.jpg')]",
  "bg-[url('/hero/7.jpg')]",
  "bg-[url('/hero/8.jpg')]",
  "bg-[url('/hero/9.jpg')]",
  "bg-[url('/hero/10.jpg')]",
]

export const Hero = () => {
  const [index, setIndex] = useState(0)
  const t = useTranslations('hero')

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIdx) => (prevIdx + 1) % backgroundImageBgUrls.length)
    }, 5000) // Cambia immagine ogni 5 secondi
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={twMerge(
        'flex h-[calc(100dvh)] items-center justify-center px-10 pb-32 text-center',
      )}
    >
      <div className="absolute inset-0 z-10 bg-black bg-opacity-40" />
      <div
        className={twJoin(
          backgroundImageBgUrls[index],
          'absolute inset-0 bg-cover bg-center bg-no-repeat transition-all',
        )}
      />

      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <Title text={t('title')} />
        <Subtitle text={t('subtitle')} />
        {/* <Description text="Immergiti in un mondo dove ogni pezzo racconta una storia unica - una fusione tra natura, creatività e amore." /> */}
        <Button
          className="border-logo text-logo hover:bg-logo hover:text-white"
          onClick={() => scrollIntoView('necklaces')}
        >
          {t('cta')}
        </Button>
      </div>
      {/* QUI UIMMAGINI O ALTRA ROBA */}
    </div>
  )
}
