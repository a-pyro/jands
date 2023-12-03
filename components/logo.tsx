import Image from 'next/image'
import logo from '../public/jands-logo.png'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

interface Props {
  className?: ClassNameValue
  width?: number
  height?: number
}

const Logo = ({ className = '', width = 300, height = 300 }: Props) => {
  return (
    <Image
      src={logo}
      alt="J and S logo"
      width={width}
      height={height}
      className={twMerge(className)}
    />
  )
}

export default Logo
