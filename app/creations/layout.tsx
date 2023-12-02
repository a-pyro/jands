import { CREATIONS_NAV_ITEMS } from '@/utils/navbar'
import Navbar from '@/components/nav/nav'
import { twMerge } from 'tailwind-merge'

const CreationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar items={CREATIONS_NAV_ITEMS} />
      <div className={twMerge('flex flex-col')}>{children}</div>
    </div>
  )
}

export default CreationsLayout
