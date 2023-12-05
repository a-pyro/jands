import SharedLayout from '@/app/_shared/shared-layout'
import { SignOutButton } from '@clerk/nextjs'

export default function Layout() {
  return (
    <SharedLayout>
      <SignOutButton />
    </SharedLayout>
  )
}
