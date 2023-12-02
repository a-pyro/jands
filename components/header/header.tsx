'use client'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from '../logo'
import { useScollResize, HEADER_SCOLL_SIZE_INIT } from './use-scroll-resize'

export default function Header() {
  const logoSize = useScollResize(HEADER_SCOLL_SIZE_INIT)

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 mx-auto flex w-full items-center justify-center bg-logo py-6',
      )}
    >
      <Link href="/">
        <Logo width={logoSize} height={logoSize} />
      </Link>
    </header>
  )
}
