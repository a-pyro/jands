import NavItem, { NavItemProps } from './NavItem'

interface Props {
  items: NavItemProps[]
}

export default function Navbar({ items }: Props) {
  return (
    <nav>
      {items.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
