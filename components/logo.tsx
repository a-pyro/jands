import Image from 'next/image'
import logo from '../public/jands-logo.png'

interface Props {
  className?: string
  width?: number
  height?: number
}

const Logo = ({ className = '', width = 50, height = 50 }: Props) => {
  return (
    <Image
      src={logo}
      alt="J and S logo"
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Logo
