import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

import { env } from '@/env.mjs'

const createMiddlewareClient = (
  request: NextRequest,
  response: NextResponse,
) => {
  let innerResponse = NextResponse.next({
    ...response,
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // If the cookie is updated, update the cookies for the request and response
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- required for supabase
          request.cookies.set({
            name,
            value,
            ...options,
          })
          innerResponse = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- required for
          innerResponse.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          // If the cookie is removed, update the cookies for the request and response
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- required for supabase
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          innerResponse = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- required for supabase
          innerResponse.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    },
  )

  return { supabase, response: innerResponse }
}

export default createMiddlewareClient
