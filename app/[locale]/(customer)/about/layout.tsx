import SharedLayout from '@/app/_shared/shared-layout'
import { type MetadataProps, getMetadata } from '@/utils/metadata'

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  return await getMetadata({ locale, localeNamespace: 'about' })
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default AboutLayout
