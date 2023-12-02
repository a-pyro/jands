'use client'
import { twMerge } from 'tailwind-merge'
import NavItem, { type NavItemProps } from './navitem'
import React from 'react'

interface Props {
  className?: string
}

export default function Nav({ className = '' }: Props) {
  return (
    <nav
      className={twMerge(
        'flex w-full flex-row items-center justify-between',
        className,
      )}
    >
      {MAIN_NAV_ITEMS.map((item) => (
        <NavItem key={item.route} {...item} />
      ))}
    </nav>
  )
}

export const MAIN_NAV_ITEMS: NavItemProps<string>[] = [
  {
    route: '/creations',
    name: 'Home',
  },
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
