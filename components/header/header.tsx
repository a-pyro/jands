'use client'
import { twMerge } from 'tailwind-merge'
import Logo from '../logo'
import { useScollResize, HEADER_SCOLL_SIZE_INIT } from './use-scroll-resize'
import Nav from '../nav/nav'
import { useState } from 'react'
import NavIcon from '../icons/nav-icon'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const { logoSize, setLogoSize } = useScollResize(HEADER_SCOLL_SIZE_INIT)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setLogoSize(HEADER_SCOLL_SIZE_INIT.initialSize)
    document.body.classList.toggle('overflow-hidden')
    setIsOpen(!isOpen)
  }

  const onLogoClick = () => {
    router.push('/')
    if (pathname === '/') window.scrollTo(0, 0)
    if (isOpen) toggleMenu()
  }

  return (
    <header
      className={twMerge(
        'fixed top-0 z-10 mx-auto flex w-full items-center justify-center py-6',
      )}
    >
      <Logo
        width={logoSize}
        height={logoSize}
        className="z-20"
        onClick={onLogoClick}
      />
      <button onClick={toggleMenu} className="fixed right-5 top-5 z-20">
        <NavIcon isOpen={isOpen} />
      </button>
      <Nav isOpen={isOpen} setIsOpen={toggleMenu} />
    </header>
  )
}
