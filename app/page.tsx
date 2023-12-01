import Gallery from '@/components/images/gallery'
// import { getAllCreations } from '../services/creations'

import getResults from '@/utils/cached-images'

export default async function Home() {
  const { resources } = await getResults({ folderName: 'about' })

  return (
    <div className="pt-10">
      <Gallery images={resources ?? []} />
    </div>
  )
}
