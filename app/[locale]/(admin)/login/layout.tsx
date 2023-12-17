import { SharedLayout } from '@/components/_shared/shared-layout'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SharedLayout>{children}</SharedLayout>
}

export default Layout
