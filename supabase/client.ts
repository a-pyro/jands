import { env } from '@/env.mjs'
import { createBrowserClient as supabaseCreateBrowserClient } from '@supabase/ssr'

export const createBrowserClient = () =>
  supabaseCreateBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )
