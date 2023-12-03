'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import NavItem from './navitem'
import { type Route } from 'next'

interface Props {
  className?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Nav({ className = '', isOpen, setIsOpen }: Props) {
  return (
    <nav
      className={twMerge(
        'fixed inset-0 z-10 flex h-[100dvh] w-screen transform flex-col items-center justify-center gap-20 overflow-hidden bg-secondary bg-opacity-50 transition-all duration-300 ease-in-out',
        isOpen
          ? 'pointer-events-auto translate-y-0'
          : 'pointer-events-none -translate-y-full',
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1 pt-20">
        {MAIN_NAV_ITEMS.map((item) => (
          <NavItem
            key={item.route}
            {...item}
            className="text-2xl  md:text-3xl lg:text-5xl"
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center ">
        {EXTRA_NAV_ITEMS.map((item) => (
          <NavItem
            key={item.route}
            {...item}
            className="text-lg transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
            onClick={() => setIsOpen(false)}
          />
        ))}
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
    route: '/creations/earrings',
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
