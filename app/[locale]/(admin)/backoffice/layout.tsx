import { SharedLayout } from '@/app/_shared/shared-layout'

import { BackOfficeNav } from './components/backoffice-nav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SharedLayout className="flex flex-row gap-5">
      <BackOfficeNav />
      <div className="flex-1">{children}</div>
    </SharedLayout>
  )
}

export default Layout
