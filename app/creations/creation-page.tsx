import Gallery from '@/components/images/gallery'
import { getCreations } from '../../services/creations'
import { type CreationType } from '../../supabase/types'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const creations = await getCreations(creationType)

  return (
    <>
      <h1 className="mb-5">{creationType}</h1>
      <Gallery creations={creations ?? []} />
    </>
  )
}
