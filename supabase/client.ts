import { createBrowserClient as supabaseCreateBrowserClient } from '@supabase/ssr'

import { env } from '@/env.mjs'

export const createBrowserClient = () =>
  supabaseCreateBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )
