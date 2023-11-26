import Gallery from '@/components/images/gallery'
import { getAllCreations } from './api/services/creations'

export default async function Home() {
  const data = await getAllCreations()

  return (
    <div className="pt-6">
      <Gallery creations={data ?? []} />
    </div>
  )
}
