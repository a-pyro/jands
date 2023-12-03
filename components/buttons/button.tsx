import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const Button = ({
  className = '',
  onClick,
  children,
  loading = false,
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={twMerge(
        'border border-dark px-6 py-1.5 text-xl  hover:bg-dark hover:text-logo',
        loading ? 'animate-pulse cursor-wait' : '',
        className,
      )}
    >
      {loading ? 'Wait please...' : children}
    </button>
  )
}

export default Button
