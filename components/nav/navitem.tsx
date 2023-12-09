'use client'
import { twMerge } from 'tailwind-merge'
import { type NavItemConfig } from './nav'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

interface Props extends NavItemConfig {
  onClick?: () => void
  className?: string
}
export default function NavItem({
  name,
  route,
  onClick,
  className = '',
}: Props) {
  const t = useTranslations('nav')
  return (
    <Link
      href={route}
      className={twMerge(
        'transform text-primary transition-transform hover:skew-x-12',
        className,
      )}
      target={route.startsWith('http') ? '_blank' : undefined}
      onClick={onClick}
    >
      {t(name)}
    </Link>
  )
}
