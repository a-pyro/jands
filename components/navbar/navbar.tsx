import { twMerge } from 'tailwind-merge'
import NavItem, { NavItemProps } from './navitem'

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
      {logo}
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
