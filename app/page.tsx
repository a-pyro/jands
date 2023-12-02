import SlideGallery from '@/components/gallery/slide-gallery'
import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'

import getResults from '@/utils/getResults'

export default async function Home() {
  const rings = await getResults({ folderName: 'rings', limit: 4 })
  const necklaces = await getResults({ folderName: 'necklaces', limit: 4 })
  const earings = await getResults({ folderName: 'earings', limit: 4 })
  const customizations = await getResults({
    folderName: 'customizations',
    limit: 4,
  })
  const everythingelse = await getResults({
    folderName: 'everythingelse',
    limit: 4,
  })

  return (
    <ScrollAdaptiveWrapper className="flex flex-col gap-20">
      <SlideGallery
        images={rings?.resources ?? []}
        name="rings"
        route="/creations/rings"
        title="Anelli"
        totalCount={rings?.total_count ?? 0}
      />
      <SlideGallery
        images={necklaces?.resources ?? []}
        name="necklaces"
        route="/creations/necklaces"
        title="Collane"
        totalCount={necklaces?.total_count ?? 0}
      />
      <SlideGallery
        images={earings?.resources ?? []}
        name="earings"
        route="/creations/earings"
        title="Orecchini"
        totalCount={earings?.total_count ?? 0}
      />
      <SlideGallery
        images={customizations?.resources ?? []}
        name="customizations"
        route="/creations/customizations"
        title="Personalizzazioni"
        totalCount={customizations?.total_count ?? 0}
      />
      <SlideGallery
        images={everythingelse?.resources ?? []}
        name="everythingelse"
        route="/creations/everythingelse"
        title="Altro"
        totalCount={everythingelse?.total_count ?? 0}
      />
    </ScrollAdaptiveWrapper>
  )
}
