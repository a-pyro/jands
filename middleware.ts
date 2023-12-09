// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse } from 'next/server'

// import type { NextRequest } from 'next/server'

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient({ req, res })
//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   // if unauthenticated user try to access backoffice redirect to signin
//   if (!user && req.nextUrl.pathname.includes('/backoffice')) {
//     console.log('🚀 ~ middleware ~ req.nextUrl.pathname:', req.nextUrl.pathname)
//     return NextResponse.redirect(new URL('/signin', req.url))
//   }

//   if (user && req.nextUrl.pathname.includes('/signin')) {
//     console.log('🚀 ~ middleware ~ req.nextUrl.pathname:', req.nextUrl.pathname)
//     return NextResponse.redirect(new URL('/backoffice', req.url))
//   }

//   return res
// }

// export const config = {
//   matcher: ['/backoffice', '/signin'],
// }

import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './navigation'

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|en|fr)/:path*'],
}
