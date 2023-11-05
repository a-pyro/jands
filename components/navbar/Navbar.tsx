import { NAVBAR_HEIGHT } from '@/utils/css'
import NavItem, { NavItemProps } from './NavItem'

interface Props {
  items: NavItemProps[]
}

export default function Navbar({ items }: Props) {
  return (
    <nav
      className={`h-[${'NAVBAR_HEIGHT'}] bg-pink-50 flex items-center justify-center gap-2 mx-auto`}
    >
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
