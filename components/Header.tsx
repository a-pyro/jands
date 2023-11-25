import { NavItemProps } from './navbar/NavItem'
import Navbar from './navbar/Navbar'

const items: NavItemProps[] = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/creations',
    name: 'Creazioni',
  },
  {
    href: '/about',
    name: 'Su di noi',
  },
  {
    href: '/contact',
    name: 'Contatti',
  },
]

export default function Header() {
  return (
    <header>
      <Navbar items={items} />
    </header>
  )
}
