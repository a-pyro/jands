'use client'
import { LocaleSwitcher } from './locale-switcher'
import { type NavItemConfig } from './nav/nav'
import { NavItem } from './nav/navitem'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-4">
      <div className="flex flex-wrap items-center justify-center gap-2 py-4">
        {FOOTER_NAV_ITEMS.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            className="text-lg text-secondary transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
          />
        ))}

        <NavItem
          className="text-lg text-secondary transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
          name="go-to-top"
          route="#"
        />
      </div>
      <LocaleSwitcher className="text-secondary hover:text-logo" />
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
    route: 'https://www.facebook.com/profile.php?id=100091625349280',
    name: 'facebook',
  },

  {
    route: '/contact',
    name: 'contact-us',
  },
]
