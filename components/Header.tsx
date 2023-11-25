import { NavItemProps } from './navbar/NavItem'
import Navbar from './navbar/Navbar'

const items: NavItemProps[] = [
  {
    href: '/',
    name: 'nav.link.home',
  },
  {
    href: '/about',
    name: 'nav.link.about',
  },
  {
    href: '/contact',
    name: 'nav.link.contact',
  },
  {
    href: '/creations',
    name: 'nav.link.creations',
  },
]

export default function Header() {
  return (
    <header>
      <Navbar items={items} />
    </header>
  )
}
