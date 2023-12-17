import { getTranslations } from 'next-intl/server'

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
      'made in italy',
      'fiori',
      'amici',
      'regali',
      'anelli',
      'collane',
      'orecchini',
      'personalizzati',
      'fatti a mano',
      'resina',
      'arte',
      'italia',
      'accessories',
      'jewelry',
      'crafts',
      'unique',
      'design',
    ],
    metadataBase: new URL('https://jands.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  }
}
