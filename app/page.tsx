import SlideGallery from '@/components/gallery/slide-gallery'
import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'

import getResults from '@/utils/getResults'

export default async function Home() {
  const result = await getResults({ folderName: 'about' })
  return (
    <ScrollAdaptiveWrapper>
      <SlideGallery
        images={result?.resources ?? []}
        name="BANENE"
        route="/"
        title="Banane"
      />
    </ScrollAdaptiveWrapper>
  )
}
