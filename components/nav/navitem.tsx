'use client'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { type NavItemConfig } from './nav'

interface Props extends NavItemConfig {
  onClick: () => void
}
export default function NavItem({ name, route, onClick }: Props) {
  return (
    <Link
      href={route}
      className={twMerge(
        'transform text-5xl text-primary transition-transform hover:skew-x-12',
      )}
      onClick={onClick}
    >
      {name}
    </Link>
  )
}
