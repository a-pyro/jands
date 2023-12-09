import createIntlMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './i18n'
import { type NextRequest } from 'next/server'
import { createMiddlewareClient } from './supabase/middleware'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
  })

  const res = handleI18nRouting(request)

  //https://www.reddit.com/r/nextjs/comments/17t32o1/nextintl_supabase_and_the_middleware/
  // only handle authSession on backoffice routes
  if (request.nextUrl.pathname.includes('/backoffice')) {
    const { supabase, response } = createMiddlewareClient(request, res)
    await supabase.auth.getSession()
    return response
  } else {
    return res
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|en|fr)/:path*'],
}
