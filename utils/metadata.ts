import { type Locale } from '@/i18n'
import { getTranslations } from 'next-intl/server'

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
  }
}
