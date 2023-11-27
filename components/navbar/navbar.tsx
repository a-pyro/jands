import { twMerge } from 'tailwind-merge'
import NavItem, { NavItemProps } from './navitem'
import Link from 'next/link'

interface Props {
  items: NavItemProps[]
  className?: string
  logo?: React.ReactNode
}

export default function Navbar({ items, className = '', logo }: Props) {
  return (
    <nav
      className={twMerge(
        'mx-auto flex h-[60px] w-full items-center justify-center gap-2',
        className,
      )}
    >
      {logo && (
        <Link className="mr-3" href="/">
          {logo}
        </Link>
      )}
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
