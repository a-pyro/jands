// https://next-intl-docs.vercel.app/

import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  messages: (await import(`./messages/${locale}.json`)).default,
}))

export const locales = ['it', 'fr', 'en'] as const

export const defaultLocale = 'it'

export type Locale = (typeof locales)[number]

export const localePrefix = 'always'
