import { cookies } from 'next/headers'
import { createServerClient } from './supabase/server'
import Gallery from '@/components/images/Gallery'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.from('about').select('*')
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gallery creations={data ?? []} />
    </div>
  )
}
