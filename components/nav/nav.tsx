'use client'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import NavItem from './navitem'
import NavIcon from '../icons/nav-icon'
import { type Route } from 'next'

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
          'fixed inset-0 z-10 flex transform flex-col items-center justify-center gap-20 bg-secondary bg-opacity-50 transition-all duration-300 ease-in-out',
          isOpen
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full',
        )}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {MAIN_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.route}
              {...item}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center ">
          {EXTRA_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.route}
              {...item}
              className="text-xl transition-colors hover:skew-x-[-10deg] hover:text-logo"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export type NavItemConfig<T extends string = string> = {
  name: string
  route: Route<T>
}
export const MAIN_NAV_ITEMS: NavItemConfig[] = [
  {
    route: '/creations/earings',
    name: 'Orecchini',
  },

  {
    route: '/creations/necklaces',
    name: 'Collane',
  },
  {
    route: '/creations/rings',
    name: 'Anelli',
  },
  {
    route: '/creations/customizations',
    name: 'Personalizzazioni',
  },
  {
    route: '/creations/everythingelse',
    name: 'Altro',
  },
]

const EXTRA_NAV_ITEMS: NavItemConfig[] = [
  {
    route: '/about',
    name: 'Chi siamo',
  },
  {
    route: 'https://www.instagram.com/jands.handmade',
    name: 'Instagram',
  },
  {
    route: 'https://www.instagram.com/jands.handmade/t',
    name: 'Facebook',
  },

  {
    route: '/contact',
    name: 'Contatti',
  },
]
