import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({
  className = '',
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'border-2 border-dark px-6 py-1.5 text-xl font-bold hover:bg-dark hover:text-logo',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
