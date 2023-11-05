import { NavItemProps } from './navbar/NavItem'
import Navbar from './navbar/Navbar'

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
  {
    href: '/works',
    name: 'Works',
  },
]

export default function Header() {
  return (
    <header>
      <Navbar items={items} />
    </header>
  )
}
