import { getTranslations } from 'next-intl/server'

import { GridGallery } from '@/components/gallery/grid-gallery'
import { getResults } from '@/services/get-results'

import { type CreationType } from '../../services/types'

export const CreationPage = async ({
  creationType,
}: {
  creationType: CreationType
}) => {
  const result = await getResults({ folderName: creationType, limit: 100 })
  const t = await getTranslations('creations')

  return (
    <div className="flex flex-col">
      <h1 className="mb-5 font-medium">{t(`${creationType}.title`)}</h1>
      <GridGallery images={result?.resources ?? []} />
    </div>
  )
}
