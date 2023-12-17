'use client'
import { useState } from 'react'
import { useLockBodyScroll } from 'react-use'

import { usePathname, useRouter } from '@/utils/navigation'

import { NavIcon } from '../icons/nav-icon'
import { Logo } from '../logo'
import { Nav } from '../nav/nav'

import { LOGO_SIZE_INIT, useLogoSize } from './use-logo-size'

export const Header = () => {
  const { logoSize, setLogoSize } = useLogoSize()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useLockBodyScroll(isOpen)

  const toggleMenu = () => {
    setLogoSize(LOGO_SIZE_INIT.initialSize)
    setIsOpen(!isOpen)
  }

  const onLogoClick = () => {
    router.push('/')
    if (pathname === '/') window.scrollTo(0, 0)
    if (isOpen) toggleMenu()
  }

  return (
    <header className="sticky top-0 z-20 flex justify-center">
      <Logo
        className="z-20 mt-3"
        color={pathname === '/' ? 'white' : 'black'}
        height={logoSize}
        onClick={onLogoClick}
        width={logoSize}
      />
      <button
        className="fixed right-5 top-5 z-20"
        onClick={toggleMenu}
        type="button"
      >
        <NavIcon isOpen={isOpen} />
      </button>
      <Nav isOpen={isOpen} setIsOpen={toggleMenu} />
    </header>
  )
}
