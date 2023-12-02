import SlideGallery from '@/components/gallery/slide-gallery'
import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'
import { ALL_CREATIONS_TYPES } from '@/supabase/types'

import getResults from '@/utils/getResults'

export default async function Home() {
  const promises = ALL_CREATIONS_TYPES.map((type) =>
    getResults({ folderName: type, limit: 5 }),
  )
  const results = await Promise.all(promises)

  return (
    <ScrollAdaptiveWrapper className="flex flex-col gap-20">
      {results.map((result, index) => (
        <SlideGallery
          key={result?.resources[index]?.public_id}
          images={result?.resources ?? []}
          name={result?.folderName ?? ''}
          route="/"
          title="Banane"
        />
      ))}
    </ScrollAdaptiveWrapper>
  )
}
