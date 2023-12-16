import { Suspense } from 'react'
import { type ClassNameValue, twJoin } from 'tailwind-merge'

import { FlowerLoading } from '@/components/_shared/flower-loading'
import { SlideGallery } from '@/components/gallery/slide-gallery'
import { Intersecting } from '@/components/intersecting'
import { ScrollAdaptiveWrapper } from '@/components/scroll-adaptive-wrapper'
import { ALL_CREATIONS_TYPES } from '@/services/types'

const delaysClasses: ClassNameValue = [
  'delay-500',
  'delay-700',
  'delay-300',
  'delay-200',
  'delay-100',
]

const Home = () => {
  return (
    <ScrollAdaptiveWrapper className="dela flex flex-col gap-20">
      {ALL_CREATIONS_TYPES.map((creationType, idx) => (
        <Suspense fallback={<FlowerLoading />} key={creationType}>
          <Intersecting
            classNameInView={twJoin(
              'opacity-100 translate-y-0 transition-all duration-500',
              delaysClasses[idx],
            )}
            classNameNotInView="opacity-0 translate-y-10"
          >
            <SlideGallery creationType={creationType} />
          </Intersecting>
        </Suspense>
      ))}
    </ScrollAdaptiveWrapper>
  )
}

export default Home
