import { cookies } from 'next/headers'
import { createServerClient } from './supabase/server'
import Gallery from '@/components/images/gallery'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.from('about').select('*')
  return (
    <div className="min-h-screenitems-center flex flex-col justify-between p-24">
      <Gallery creations={data ?? []} />
    </div>
  )
}
