'use client'
import { twMerge } from 'tailwind-merge'
import NavItem, { type NavItemProps } from './navitem'
import React from 'react'

interface Props {
  items: NavItemProps<string>[]
  className?: string
}

export default function Navbar({ items, className = '' }: Props) {
  return (
    <nav
      className={twMerge(
        'flex w-full flex-row items-center justify-between',
        className,
      )}
    >
      {items.map((item) => (
        <NavItem key={item.route} {...item} />
      ))}
    </nav>
  )
}
