import Gallery from '@/components/images/gallery'

import getResults from '@/utils/getResults'

export default async function Home() {
  const result = await getResults({ folderName: 'about' })
  return <Gallery images={result?.resources ?? []} />
}
