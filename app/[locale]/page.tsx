import { twJoin } from 'tailwind-merge'

import { SlideGallery } from '@/components/gallery/slide-gallery'
import { Intersecting } from '@/components/intersecting'
import { ScrollAdaptiveWrapper } from '@/components/scroll-adaptive-wrapper'
import { ALL_CREATIONS_TYPES } from '@/services/types'

// const delaysClasses = [
//   'delay-100',
//   'delay-200',
//   'delay-300',
//   'delay-400',
//   'delay-500',
// ]

const Home = () => {
  return (
    <ScrollAdaptiveWrapper className="flex flex-col gap-20">
      {ALL_CREATIONS_TYPES.map((creationType) => (
        <Intersecting
          classNameInView={twJoin(
            'opacity-100 translate-y-0 transition-all duration-500',
          )}
          classNameNotInView="opacity-0 translate-y-10"
          key={creationType}
        >
          <SlideGallery creationType={creationType} />
        </Intersecting>
      ))}
    </ScrollAdaptiveWrapper>
  )
}

export default Home
