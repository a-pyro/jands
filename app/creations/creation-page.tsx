import Gallery from '@/components/images/gallery'
import { getCreations } from '../api/services/creations'
import { CreationType } from '../supabase/types'
import { CONTAINER_MAX_WIDTH } from '@/utils/css'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const creations = await getCreations(creationType)

  return (
    <div className={CONTAINER_MAX_WIDTH}>
      <h1>{creationType}</h1>
      <Gallery creations={creations ?? []} />
    </div>
  )
}
