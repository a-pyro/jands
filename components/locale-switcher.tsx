import { useTranslations } from 'next-intl';
import { type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Locale, locales } from '@/i18n';
import { usePathname, useRouter } from '@/utils/navigation';

type Props = HTMLAttributes<HTMLDivElement>;

export const LocaleSwitcher = ({ className = '' }: Props) => {
  const t = useTranslations('nav.locales');
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: Locale) => {
    router.push(pathname, { locale });
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          className={twMerge(
            'text-lg text-primary transition-colors hover:skew-x-[-10deg] hover:text-logo md:text-xl',
            className,
          )}
          key={locale}
          onClick={() => switchLocale(locale)}
          type="button"
        >
          {t(locale)}
        </button>
      ))}
    </div>
  );
};
