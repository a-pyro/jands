import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import NavItem, { type NavItemProps } from './navitem'
import NavIcon from '../icons/nav-icon'

interface Props {
  className?: string
}

export default function Nav({ className = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={twMerge(
        'flex flex-row items-center justify-between',
        className,
      )}
    >
      <button onClick={toggleMenu} className="z-30">
        <NavIcon isOpen={isOpen} />
      </button>
      <div
        className={twMerge(
          'fixed inset-0 z-10 flex transform items-center justify-center bg-black bg-opacity-50 transition-transform duration-1000 ease-in-out',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-full opacity-0',
        )}
      >
        {MAIN_NAV_ITEMS.map((item) => (
          <NavItem key={item.route} {...item} />
        ))}
      </div>
    </nav>
  )
}

export const MAIN_NAV_ITEMS: NavItemProps<string>[] = [
  {
    route: '/creations',
    name: 'Creazioni',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/contact',
    name: 'Contatti',
  },
]

export const CREATIONS_NAV_ITEMS: NavItemProps<string>[] = [
  {
    route: '/creations/customizations',
    name: 'Personalizzazioni',
  },
  {
    route: '/creations/earings',
    name: 'Orecchini',
  },
  {
    route: '/creations/everythingelse',
    name: 'Altro',
  },
  {
    route: '/creations/necklaces',
    name: 'Collane',
  },
  {
    route: '/creations/rings',
    name: 'Anelli',
  },
]
