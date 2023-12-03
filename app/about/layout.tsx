import { type Metadata } from 'next'
import SharedLayout from '../_shared/shared-layout'

export const metadata: Metadata = {
  title: 'JandS - About',
  description: 'Discover more about J and S and their journey',
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default AboutLayout
