import { type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './i18n'
// import { createMiddlewareClient } from './supabase/middleware';

export default function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })

  const res = handleI18nRouting(request)

  //https://www.reddit.com/r/nextjs/comments/17t32o1/nextintl_supabase_and_the_middleware/
  // only handle authSession on backoffice routes
  // if (request.nextUrl.pathname.includes('/backoffice')) {
  //   const { supabase, response } = createMiddlewareClient(request, res);
  //   const session = await supabase.auth.getSession();
  //   console.log(
  //     '🚀 ~ middleware ~ request.nextUrl.pathname:',
  //     request.nextUrl.pathname,
  //   );
  //   if (session.data.session === null) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  //   return response;
  // }
  return res
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|en|fr)/:path*'],
}
