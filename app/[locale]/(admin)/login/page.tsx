import { cookies } from 'next/headers'
import Link from 'next/link'

import { createServerClient } from '@/supabase/server'
import { redirect } from '@/utils/navigation'

const Page = ({ searchParams }: { searchParams: { message: string } }) => {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/backoffice')
  }

  // const signUp = async (formData: FormData) => {
  //   'use server';

  //   const origin = headers().get('origin');
  //   const email = formData.get('email') as string;
  //   const password = formData.get('password') as string;
  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect('/login?message=Could not authenticate user');
  //   }

  //   return redirect('/login?message=Check email to continue sign in process');
  // };

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <Link
        className="text-foreground bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm no-underline"
        href="/"
      >
        <svg
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        action={signIn}
        className="animate-in text-foreground flex w-full flex-1 flex-col justify-center gap-2"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
        <button
          className="text-foreground mb-2 rounded-md bg-green-700 px-4 py-2"
          type="submit"
        >
          Sign In
        </button>
        {/* <button
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          formAction={signUp}
        >
          Sign Up
        </button> */}
        {searchParams.message ? (
          <p className="bg-foreground/10 text-foreground mt-4 p-4 text-center">
            {searchParams.message}
          </p>
        ) : null}
      </form>
    </div>
  )
}

export default Page
