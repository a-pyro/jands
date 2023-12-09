import SharedLayout from '@/app/_shared/shared-layout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JandS - Creations',
  description: 'J and S - Handmade resin creations',
}

const CreationsLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default CreationsLayout
