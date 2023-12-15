'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'

// import { isFeatureEnabled } from '@/utils/feature-toggler';

import { FOOTER_NAV_ITEMS } from '../footer'
import { LocaleSwitcher } from '../locale-switcher'

import { NavItem } from './navitem'

type Props = {
  className?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Nav = ({ className = '', isOpen, setIsOpen }: Props) => {
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
      <div className="flex flex-col gap-20 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center gap-1 pt-20">
          {MAIN_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.route}
              {...item}
              className="text-2xl  md:text-3xl lg:text-5xl"
              onClick={() => setIsOpen(false)}
            />
          ))}
          {/* {isFeatureEnabled('backoffice') && ( */}
          {/* <NavItem
            className="text-2xl  md:text-3xl lg:text-5xl"
            name="backoffice"
            onClick={() => setIsOpen(false)}
            route="/backoffice"
          /> */}
          {/* )} */}
        </div>

        <div className="flex flex-col items-center justify-center ">
          {FOOTER_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              className="text-lg transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl"
              onClick={() => setIsOpen(false)}
            />
          ))}
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}

export type NavItemConfig = {
  name: Exclude<keyof IntlMessages['nav'], 'locales'>
  route: string
}
export const MAIN_NAV_ITEMS: NavItemConfig[] = [
  {
    route: '/creations/earrings',
    name: 'earrings',
  },

  {
    route: '/creations/necklaces',
    name: 'necklaces',
  },
  {
    route: '/creations/rings',
    name: 'rings',
  },
  {
    route: '/creations/customizations',
    name: 'customizations',
  },
  {
    route: '/creations/everythingelse',
    name: 'everythingelse',
  },
]
