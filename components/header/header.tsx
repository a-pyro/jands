'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { usePathname, useRouter } from '@/utils/navigation';

import { NavIcon } from '../icons/nav-icon';
import { Logo } from '../logo';
import { Nav } from '../nav/nav';

import { HEADER_SCOLL_SIZE_INIT, useScollResize } from './use-scroll-resize';

export const Header = () => {
  const { logoSize, setLogoSize } = useScollResize(HEADER_SCOLL_SIZE_INIT);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setLogoSize(HEADER_SCOLL_SIZE_INIT.initialSize);
    document.body.classList.toggle('overflow-hidden');
    setIsOpen(!isOpen);
  };

  const onLogoClick = () => {
    router.push('/');
    if (pathname === '/') window.scrollTo(0, 0);
    if (isOpen) toggleMenu();
  };

  return (
    <header
      className={twMerge('fixed left-0 right-0 top-0 z-10 flex justify-center')}
    >
      <Logo
        className="z-20 mt-3"
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
  );
};
