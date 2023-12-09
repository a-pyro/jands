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
    //  eslint-disable-next-line
    <img
      src="/jands-logo.png"
      alt="J and S logo"
      width={width}
      height={height}
      className={twMerge('cursor-pointer', className)}
      onClick={onClick}
    />
  )
}

export default Logo
