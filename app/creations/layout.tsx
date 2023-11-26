import { CREATIONS_NAV_ITEMS } from '@/utils/navbar'
import Navbar from '@/components/navbar/navbar'
import { twMerge } from 'tailwind-merge'
import { CONTAINER_MAX_WIDTH } from '@/utils/css'

const CreationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar items={CREATIONS_NAV_ITEMS} className="bg-slate-200" />
      <div className={twMerge('flex flex-col', CONTAINER_MAX_WIDTH)}>
        {children}
      </div>
    </div>
  )
}

export default CreationsLayout
