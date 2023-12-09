//https: next-intl-docs.vercel.app/docs/routing/navigation#localized-pathnames
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['it', 'fr', 'en'] as const

export const defaultLocale = 'it'

export type Locale = (typeof locales)[number]

export const localePrefix = 'always'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
