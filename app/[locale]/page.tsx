import { Suspense } from 'react'
import { twJoin } from 'tailwind-merge'

import { FlowerLoading } from '@/components/_shared/flower-loading'
import { SlideGallery } from '@/components/gallery/slide-gallery'
import { Hero } from '@/components/hero/hero'
import { Intersecting } from '@/components/intersecting'
import { ScrollAdaptiveWrapper } from '@/components/scroll-adaptive-wrapper'
import { ALL_CREATIONS_TYPES } from '@/services/types'

const Home = () => {
  return (
    <ScrollAdaptiveWrapper className="flex flex-col">
      <Hero />
      {ALL_CREATIONS_TYPES.map((creationType) => (
        <Suspense fallback={<FlowerLoading />} key={creationType}>
          <Intersecting
            classNameInView={twJoin(
              'opacity-100 translate-y-0 transition-all duration-500',
            )}
            classNameNotInView="opacity-0 translate-y-10"
          >
            <SlideGallery creationType={creationType} id={creationType} />
          </Intersecting>
        </Suspense>
      ))}
    </ScrollAdaptiveWrapper>
  )
}

export default Home
