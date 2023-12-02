import Gallery from '@/components/images/gallery'

import getResults from '@/utils/cached-images'

export default async function Home() {
  const result = await getResults({ folderName: 'about' })
  return <Gallery images={result?.resources ?? []} />
}
