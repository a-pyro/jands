import { CREATIONS_NAV_ITEMS } from '@/utils/navbar'
import Navbar from '@/components/navbar/navbar'

const CreationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar items={CREATIONS_NAV_ITEMS} className="bg-slate-200" />
      <div>{children}</div>
    </div>
  )
}

export default CreationsLayout
