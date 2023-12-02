'use client'
import { type Route } from 'next'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export interface NavItemProps<T extends string> {
  name: string
  route: Route<T>
}
export default function NavItem<T extends string>({
  name,
  route,
}: NavItemProps<T>) {
  return (
    <Link
      href={route}
      className={twMerge(
        'transform text-5xl font-bold  text-primary transition-transform hover:skew-x-12',
      )}
    >
      {name}
    </Link>
  )
}
