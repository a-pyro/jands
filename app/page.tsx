import Gallery from '@/components/images/gallery'
import { getAllCreations } from '../services/creations'

export default async function Home() {
  const data = await getAllCreations()

  return (
    <div className="pt-10">
      <Gallery creations={data ?? []} />
    </div>
  )
}
