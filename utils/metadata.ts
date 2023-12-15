import { getTranslations } from 'next-intl/server'

import { env } from '@/env.mjs'
import { type Locale } from '@/i18n'

export type MetadataProps = {
  params: {
    locale: Locale
  }
}

export type LocaleNamespaces = 'contact' | 'home' | 'about'

export async function getMetadata({
  locale,
  localeNamespace: namespace,
}: {
  locale: Locale
  localeNamespace: LocaleNamespaces
}) {
  const t = await getTranslations({
    locale,
    namespace,
  })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: [
      'resin',
      'art',
      'handmade',
      'flowers',
      'friends',
      'gifts',
      'rings',
      'necklaces',
      'earrings',
      'custom',
    ],
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  } as const
}
