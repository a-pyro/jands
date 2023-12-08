import Image from 'next/image'
import logo from '../public/jands-logo.png'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

interface Props {
  className?: ClassNameValue
  width?: number
  height?: number
  onClick?: () => void
}

const Logo = ({
  className = '',
  width = 300,
  height = 300,
  onClick,
}: Props) => {
  return (
    <Image
      src={logo}
      alt="J and S logo"
      priority
      width={width}
      height={height}
      className={twMerge('cursor-pointer', className)}
      onClick={onClick}
    />
  )
}

export default Logo
