import { cookies } from 'next/headers'
import { createServerClient } from './supabase/server'
import Gallery from '@/components/images/gallery'
// import { Carousel } from '@/components/images/carousel'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.from('about').select('*')
  if (error) throw error
  return (
    <div className="pt-6">
      <Gallery creations={data ?? []} />
    </div>
  )
}
