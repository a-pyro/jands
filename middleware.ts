import { type NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './i18n'
import createMiddlewareClient from './supabase/middleware'

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })

  const res = handleI18nRouting(request)

  //https://www.reddit.com/r/nextjs/comments/17t32o1/nextintl_supabase_and_the_middleware/
  // only handle authSession on backoffice routes

  if (pathname.includes('backoffice')) {
    const { supabase, response } = createMiddlewareClient(request, res)
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (session === null) {
      return NextResponse.redirect(new URL(`/it/login`, request.url))
    }
    return response
  }

  return res
}

export const config = {
  // Match all routes
}
