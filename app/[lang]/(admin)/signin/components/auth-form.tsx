'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@/supabase/types'
//supabase.com/docs/guides/api/rest/generating-types
// https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs?database-method=dashboard&language=ts

const redirectTo = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>({})

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={[]}
      redirectTo={redirectTo}
    />
  )
}
