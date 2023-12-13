'use client';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { Link } from '@/utils/navigation';

import { type NavItemConfig } from './nav';

type Props = {
  onClick?: () => void;
  className?: string;
} & NavItemConfig;
export const NavItem = ({ name, route, onClick, className = '' }: Props) => {
  const t = useTranslations('nav');
  return (
    <Link
      className={twMerge(
        'transform text-primary transition-transform hover:skew-x-12',
        className,
      )}
      href={route}
      onClick={onClick}
      target={route.startsWith('http') ? '_blank' : undefined}
    >
      {t(name)}
    </Link>
  );
};
