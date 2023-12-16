'use client'
import { twJoin } from 'tailwind-merge'

import { Button } from '../buttons/button'
import { LOGO_SIZE_INIT, useLogoSize } from '../header/use-logo-size'

type Props = {
  text: string
}

const Title = ({ text }: Props) => {
  return <h1 className="text-3xl md:text-5xl">{text}</h1>
}

const Subtitle = ({ text }: Props) => {
  return <h2 className="text-xl md:text-2xl">{text}</h2>
}

const Description = ({ text }: Props) => {
  return <p className="text-base md:text-lg">{text}</p>
}

const HeroCta = ({ text }: Props) => {
  return (
    <Button className="border-2 border-black px-4 py-2 text-base md:text-lg">
      {text}
    </Button>
  )
}

export const Hero = () => {
  const { logoSize } = useLogoSize()
  const position = logoSize !== LOGO_SIZE_INIT.minSize ? 'fixed' : 'absolute'

  return (
    <div
      className={twJoin(
        'flex h-[calc(100dvh-200px)] place-content-center',
        position,
      )}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Title text="Arte che risuona con la Natura" />
        <Subtitle text="Scopri l'unicità dell'arte fatta a mano" />
        <Description text="Immergiti in un mondo dove ogni pezzo racconta una storia unica - una fusione tra natura, creatività e amore." />
        <HeroCta text="Esplora le Nostre Creazioni" />
        {/* QUI UIMMAGINI O ALTRA ROBA */}
      </div>
    </div>
  )
}
