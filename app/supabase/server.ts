import 'server-only'
import {
  createServerClient as createSupbaseServerClient,
  type CookieOptions,
} from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from './types'
import { SUPABASE_API_URL, SUPABASE_SERVICE_ROLE_KEY } from '.'

export const createServerClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createSupbaseServerClient<Database>(
    SUPABASE_API_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  )
}
