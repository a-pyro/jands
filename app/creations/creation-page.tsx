import Gallery from '@/components/images/gallery'
import { getCreations } from '../api/services/creations'
import { CreationType } from '../supabase/types'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const creations = await getCreations(creationType)

  return (
    <>
      <h1>{creationType}</h1>
      <Gallery creations={creations ?? []} />
    </>
  )
}
