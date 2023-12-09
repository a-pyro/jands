import SharedLayout from '@/app/_shared/shared-layout'
import { type Locale } from '@/i18n'
import { type CreationType } from '@/services/types'
import { getTranslations } from 'next-intl/server'

type MetadataProps = {
  params: {
    locale: Locale
    type: CreationType
  }
}

export async function generateMetadata({
  params: { locale, type },
}: MetadataProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('creations.metadata.title')} ${t(`creations.${type}.title`)}`,
    description: t(`creations.${type}.description`),
  }
}

const CreationsLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default CreationsLayout
