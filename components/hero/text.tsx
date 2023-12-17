import { scrollIntoView } from '@/utils/ui'

import { Button } from '../buttons/button'

type Props = {
  text: string
}

export const Title = ({ text }: Props) => {
  return <h1 className="fade-in text-4xl text-logo md:text-5xl">{text}</h1>
}

export const Subtitle = ({ text }: Props) => {
  return <h2 className="fade-in text-xl  text-logo">{text}</h2>
}

export const Description = ({ text }: Props) => {
  return <p className="fade-in  text-lg text-logo">{text}</p>
}

export const HeroCta = ({ text }: Props) => (
  <Button
    className="fade-in border-logo text-logo hover:bg-logo hover:text-white"
    onClick={() => scrollIntoView('necklaces')}
  >
    {text}
  </Button>
)
