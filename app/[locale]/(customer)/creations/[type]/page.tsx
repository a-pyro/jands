import { CreationPage } from '@/components/_shared/shared-page'
import { type CreationType } from '@/services/types'

const Page = ({ params }: { params: { type: CreationType } }) => {
  const { type } = params
  return <CreationPage creationType={type} />
}

export default Page
