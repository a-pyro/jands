import { type Metadata } from 'next'
import SharedLayout from '../_shared/shared-layout'

export const metadata: Metadata = {
  title: 'JandS - Creations',
  description: 'J and S - Handmade resin creations',
}

const CreationsLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default CreationsLayout
