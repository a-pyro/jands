'use client'
import Button from '@/components/buttons/button'

export const SignoutButton = () => {
  return (
    <Button
      onClick={() =>
        fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signout`, {
          method: 'POST',
        })
      }
    >
      Log out
    </Button>
  )
}
