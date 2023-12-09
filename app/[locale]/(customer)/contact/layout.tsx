import SharedLayout from '@/app/_shared/shared-layout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JandS - Contact',
  description: 'Contact J and S for more information',
}

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default ContactLayout
