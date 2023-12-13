import { cookies } from 'next/headers'

import { createServerClient } from '@/supabase/server'
import { Link, redirect } from '@/utils/navigation'

const signOut = async () => {
  'use server'
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  await supabase.auth.signOut()
  return redirect('/login')
}
export const AuthButton = async () => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button
          className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline"
          type="submit"
        >
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
      href="/login"
    >
      Login
    </Link>
  )
}
