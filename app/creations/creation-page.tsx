import { getCreations } from '../api/services/creations'
import { CreationType } from '../supabase/types'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const rings = await getCreations(creationType)
  return (
    <>
      <h1>{creationType}</h1>
      <div>{JSON.stringify(rings)}</div>
    </>
  )
}
