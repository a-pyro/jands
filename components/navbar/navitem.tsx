'use client'
import { type Route } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export interface NavItemProps<T extends string> {
  name: string
  route: Route<T>
}
export default function NavItem<T extends string>({
  name,
  route,
}: NavItemProps<T>) {
  const pathname = usePathname()
  const isActive = pathname === route
  return (
    <Link
      href={route}
      className={twMerge(
        'text-lg font-bold text-purple-900 hover:text-purple-700',
        isActive ? 'text-purple-700' : 'text-purple-900',
      )}
    >
      {name}
    </Link>
  )
}
