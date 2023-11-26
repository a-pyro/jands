import { twMerge } from 'tailwind-merge'
import NavItem, { NavItemProps } from './navitem'

interface Props {
  items: NavItemProps[]
  className?: string
}

export default function Navbar({ items, className = '' }: Props) {
  return (
    <nav
      className={twMerge(
        'mx-auto flex h-[60px] w-full items-center justify-center gap-2 bg-pink-50',
        className,
      )}
    >
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
