import { type NavItemConfig } from './nav/nav'
import NavItem from './nav/navitem'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-center gap-2 py-4">
        {FOOTER_NAV_ITEMS.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            className="text-lg text-secondary transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
          />
        ))}
        <NavItem
          name="go-to-top"
          route="#"
          className="text-lg text-secondary transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
        />
      </div>
    </footer>
  )
}

export const FOOTER_NAV_ITEMS: NavItemConfig[] = [
  {
    route: '/about',
    name: 'about',
  },
  {
    route: 'https://www.instagram.com/jands.handmade',
    name: 'instagram',
  },
  {
    route: 'https://www.instagram.com/jands.handmade',
    name: 'facebook',
  },

  {
    route: '/contact',
    name: 'contact-us',
  },
]
