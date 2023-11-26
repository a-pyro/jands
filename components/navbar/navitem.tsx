'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export interface NavItemProps {
  name: string
  href: string
}
export default function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={twMerge(
        'text-lg font-bold text-purple-900 hover:text-purple-700',
        isActive ? 'text-purple-700' : 'text-purple-900',
      )}
    >
      {name}
      {' 🌸 '}
    </Link>
  )
}
