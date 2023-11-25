import NavItem, { NavItemProps } from './NavItem'

interface Props {
  items: NavItemProps[]
}

export default function Navbar({ items }: Props) {
  return (
    <nav
      className={`h-[60px] bg-pink-50 flex items-center justify-center gap-2 mx-auto`}
    >
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
