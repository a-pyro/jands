'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Logo from './logo'
import { usePathname } from 'next/navigation'

const interpolateLogoSize = (scrollPosition: number) => {
  const minLogoSize = 50
  const maxLogoSize = 200
  const scrollRange = 200

  if (scrollPosition <= 0) {
    return maxLogoSize
  } else if (scrollPosition >= scrollRange) {
    return minLogoSize
  } else {
    return (
      maxLogoSize - (scrollPosition / scrollRange) * (maxLogoSize - minLogoSize)
    )
  }
}

export default function Header() {
  const [logoSize, setLogoSize] = useState(200)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY
      setLogoSize(interpolateLogoSize(newScrollPosition))
    }

    if (pathname === '/') {
      setLogoSize(200)
      window.addEventListener('scroll', handleScroll)
    }

    if (pathname !== '/') {
      setLogoSize(50)
      window.removeEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <header
      className={twMerge(
        'fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-center gap-2 bg-logo',
      )}
    >
      <Link className="mr-3" href="/">
        <Logo width={logoSize} height={logoSize} />
      </Link>
    </header>
  )
}
