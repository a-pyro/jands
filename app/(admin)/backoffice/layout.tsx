import SharedLayout from '@/app/_shared/shared-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SharedLayout>{children}</SharedLayout>
}
