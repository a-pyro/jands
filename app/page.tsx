import Gallery from '@/components/images/gallery'
import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'

import getResults from '@/utils/getResults'

export default async function Home() {
  const result = await getResults({ folderName: 'about' })
  return (
    <ScrollAdaptiveWrapper>
      <Gallery images={result?.resources ?? []} />
    </ScrollAdaptiveWrapper>
  )
}
