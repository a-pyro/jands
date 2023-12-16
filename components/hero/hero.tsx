import { Button } from '../buttons/button'

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

const CTAButton = ({ text }: Props) => {
  return (
    <Button className="border-2 border-black px-4 py-2 text-base md:text-lg">
      {text}
    </Button>
  )
}

export const Hero = () => {
  return (
    <div className="container mx-auto h-[calc(100dvh-200px)] px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <Title text="Arte che risuona con la Natura" />
        <Subtitle text="Scopri l'unicità dell'arte fatta a mano" />
        <Description text="Immergiti in un mondo dove ogni pezzo racconta una storia unica - una fusione tra natura, creatività e amore." />
        <CTAButton text="Esplora le Nostre Creazioni" />
        {/* <ImageComponent src="path/to/image.jpg" /> */}
      </div>
    </div>
  )
}

// Title.jsx, Subtitle.jsx, Description.jsx e CTAButton.jsx seguiranno una struttura simile
