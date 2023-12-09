import { type Metadata } from 'next'
import SharedLayout from '../../_shared/shared-layout'

export const metadata: Metadata = {
  title: 'JandS - Contact',
  description: 'Contact J and S for more information',
}

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
)

export default ContactLayout
