import { type ClassNameValue, twMerge } from 'tailwind-merge'

type Props = {
  className?: ClassNameValue
  width?: number
  height?: number
  onClick?: () => void
}

export const Logo = ({
  className = '',
  width = 300,
  height = 300,
  onClick,
}: Props) => {
  return (
    //  eslint-disable-next-line -- dont want to use next/image here
    <img
      alt="J and S logo"
      className={twMerge('cursor-pointer', className)}
      height={height}
      onClick={onClick}
      src="/logo.png"
      width={width}
    />
  )
}
