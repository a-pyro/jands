import GridGallery from '@/components/gallery/grid-gallery'
import { type CreationType } from '../../services/types'
import getResults from '@/services/getResults'
import { getTranslations } from 'next-intl/server'

export default async function CreationPage({
  creationType,
}: {
  creationType: CreationType
}) {
  const result = await getResults({ folderName: creationType, limit: 100 })
  const t = await getTranslations('creations')

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 font-medium">{t(`${creationType}.title`)}</h1>
      <GridGallery images={result?.resources ?? []} />
    </div>
  )
}
