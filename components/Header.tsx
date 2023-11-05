import { NavItemProps } from './navbar/NavItem'
import Navbar from './navbar/navbar'

const items: NavItemProps[] = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/contact',
    name: 'Contact',
  },
]

export default function Header() {
  return (
    <header>
      <Navbar items={items} />
    </header>
  )
}
