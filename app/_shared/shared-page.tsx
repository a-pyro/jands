import GridGallery from '@/components/gallery/grid-gallery'
import { type CreationType } from '../../services/types'
import getResults from '@/services/getResults'
import { dictionary } from '@/lang/dictionary'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType | 'about'
}) {
  const result = await getResults({ folderName: creationType, limit: 100 })

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 font-medium">{dictionary[creationType]}</h1>
      <GridGallery images={result?.resources ?? []} />
    </div>
  )
}
