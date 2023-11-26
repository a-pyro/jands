import { ApiCreation } from '@/app/supabase/types'

export function Carousel({ creations }: { creations: ApiCreation[] }) {
  return (
    <div className="mx-auto">
      <div className="carousel">
        {creations.map((creation) => (
          <BlurImage key={creation.id} creation={creation} />
        ))}
      </div>
    </div>
  )
}
