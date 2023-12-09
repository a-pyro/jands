import SharedLayout from '@/app/_shared/shared-layout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JandS - About',
  description: 'Discover more about J and S and their journey',
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default AboutLayout
