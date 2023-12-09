import Image from 'next/image'

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
export default function Loading() {
  return (
    <Image
      src={`/loading/${getRandomNumber(1, 13)}.jpg`}
      alt="Loading..."
      fill
      className="z-50 object-cover object-center"
    />
  )
}
