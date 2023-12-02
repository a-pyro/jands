'use client'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { type NavItemConfig } from './nav'

interface Props extends NavItemConfig {
  onClick: () => void
  className?: string
}
export default function NavItem({
  name,
  route,
  onClick,
  className = '',
}: Props) {
  return (
    <Link
      href={route}
      className={twMerge(
        'transform text-2xl text-primary transition-transform hover:skew-x-12 md:text-3xl lg:text-5xl',
        className,
      )}
      target={route.startsWith('http') ? '_blank' : undefined}
      onClick={onClick}
    >
      {name}
    </Link>
  )
}
