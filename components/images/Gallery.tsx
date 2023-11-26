import { ApiCreation } from '@/app/supabase/supabase'
import BlurImage from './BlurImage'

export default function Gallery({ creations }: { creations: ApiCreation[] }) {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {creations.map((creation) => (
          <BlurImage key={creation.id} creation={creation} />
        ))}
      </div>
    </div>
  )
}
