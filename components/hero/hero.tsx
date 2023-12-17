'use client'

import { scrollIntoView } from '@/utils/scroll-into-view'

import { Button } from '../buttons/button'

import { Description, Subtitle, Title } from './text'

export const Hero = () => {
  return (
    <div className="flex h-[calc(100dvh-100px)] flex-col place-content-center items-center justify-center gap-6 px-10 pb-32 text-center">
      <Title text="Arte che risuona con la Natura" />
      <Subtitle text="Scopri l'unicità dell'arte fatta a mano" />
      <Description text="Immergiti in un mondo dove ogni pezzo racconta una storia unica - una fusione tra natura, creatività e amore." />
      <Button onClick={() => scrollIntoView('necklaces')}>
        Esplora le Nostre Creazioni
      </Button>
      {/* QUI UIMMAGINI O ALTRA ROBA */}
    </div>
  )
}
