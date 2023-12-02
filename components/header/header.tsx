'use client'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from '../logo'
import { useScollResize, HEADER_SCOLL_SIZE_INIT } from './use-scroll-resize'
import Nav from '../nav/nav'
import { useState } from 'react'
import NavIcon from '../icons/nav-icon'

export default function Header() {
  const logoSize = useScollResize(HEADER_SCOLL_SIZE_INIT)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    document.body.classList.toggle('overflow-hidden')
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={twMerge(
        'fixed top-0 z-10 mx-auto flex w-full items-center justify-center py-6',
      )}
    >
      <Link className="z-50" href="/">
        <Logo width={logoSize} height={logoSize} />
      </Link>
      <button onClick={toggleMenu} className="fixed right-5 top-5 z-20">
        <NavIcon isOpen={isOpen} />
      </button>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}
