import Gallery from '@/components/images/gallery'
import { type CreationType } from '../../supabase/types'
import getResults from '@/utils/cached-images'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const result = await getResults({ folderName: creationType })

  return (
    <>
      <h1 className="mb-5">{creationType}</h1>
      <Gallery images={result?.resources ?? []} />
    </>
  )
}
