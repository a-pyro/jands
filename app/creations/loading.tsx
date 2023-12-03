import Image from 'next/image'
import Image1 from '../../public/loading/1.jpg'
import Image2 from '../../public/loading/2.jpg'
import Image3 from '../../public/loading/3.jpg'
import Image4 from '../../public/loading/4.jpg'
import Image5 from '../../public/loading/5.jpg'
import Image6 from '../../public/loading/6.jpg'
import Image7 from '../../public/loading/7.jpg'
import Image8 from '../../public/loading/8.jpg'
import Image9 from '../../public/loading/9.jpg'
import Image10 from '../../public/loading/10.jpg'
import Image11 from '../../public/loading/11.jpg'
import Image12 from '../../public/loading/12.jpg'
import Image13 from '../../public/loading/13.jpg'

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
]

const getRandomImage = () => {
  const random = Math.floor(Math.random() * images.length)
  return images[random]
}

export default function Loading() {
  return (
    <Image
      src={getRandomImage()}
      alt="Loading..."
      fill
      className="object-cover object-center"
    />
  )
}
