import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
const allowedUserId = process.env.CLERK_ALLOWED_USER_ID ?? ''
const isAllowedUser = (userId: string | null) => userId === allowedUserId
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  afterAuth(auth, req, _evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    if (!isAllowedUser(auth.userId)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return redirectToSignIn({ returnBackUrl: req.url })
    }
  },
})

export const config = {
  matcher: ['/backoffice(.*)', '/api(.*)'],
}

// probably clerk and this middleware are the reason for this warning
// [webpack.cache.PackFileCacheStrategy] Serializing big strings (104kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)