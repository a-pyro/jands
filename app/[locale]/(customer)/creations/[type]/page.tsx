import CreationPage from '@/app/_shared/shared-page'
import { type CreationType } from '@/services/types'

export default function Page({ params }: { params: { type: CreationType } }) {
  const { type } = params
  return <CreationPage creationType={type} />
}
