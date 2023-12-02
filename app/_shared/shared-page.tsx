import Gallery from '@/components/images/gallery'
import { type CreationType } from '../../supabase/types'
import getResults from '@/utils/getResults'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const result = await getResults({ folderName: creationType })

  return (
    <div className="flex flex-col">
      <h1>{creationType}</h1>
      <Gallery images={result?.resources ?? []} />
    </div>
  )
}
