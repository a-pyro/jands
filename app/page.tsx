import SlideGallery from '@/components/gallery/slide-gallery'
import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'
import { ALL_CREATIONS_TYPES } from '@/services/types'

import getResults from '@/services/getResults'
import AuthForm from '@/components/auth/auth-form'

export default async function Home() {
  const results = await Promise.all(
    ALL_CREATIONS_TYPES.map((folder) =>
      getResults({ folderName: folder, limit: 4 }),
    ),
  )

  return (
    <ScrollAdaptiveWrapper className="flex flex-col gap-20">
      {results.map((result, index) => (
        <SlideGallery
          key={ALL_CREATIONS_TYPES[index]}
          images={result?.resources ?? []}
          name={ALL_CREATIONS_TYPES[index]}
          route={`/creations/${ALL_CREATIONS_TYPES[index]}`}
          title={ALL_CREATIONS_TYPES[index]}
          totalCount={result?.total_count ?? 0}
        />
      ))}
      <AuthForm />
    </ScrollAdaptiveWrapper>
  )
}
