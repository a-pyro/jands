type Props = {
  text: string
}

export const Title = ({ text }: Props) => {
  return <h1 className="text-3xl md:text-5xl">{text}</h1>
}

export const Subtitle = ({ text }: Props) => {
  return <h2 className="text-xl md:text-2xl">{text}</h2>
}

export const Description = ({ text }: Props) => {
  return <p className="text-base md:text-lg">{text}</p>
}
