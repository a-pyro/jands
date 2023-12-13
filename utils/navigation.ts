//https: next-intl-docs.vercel.app/docs/routing/navigation#localized-pathnames
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { locales } from '../i18n'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
