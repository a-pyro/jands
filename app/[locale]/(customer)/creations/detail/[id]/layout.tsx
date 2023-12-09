import SharedLayout from '@/app/_shared/shared-layout'
import { type MetadataProps } from '@/utils/metadata'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({
    locale,
    namespace: 'contact.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

const CreationsLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default CreationsLayout
