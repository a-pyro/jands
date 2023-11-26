import Navbar from './navbar/navbar'
import { MAIN_NAV_ITEMS } from '@/utils/navbar'

export default function Header() {
  return (
    <header>
      <Navbar items={MAIN_NAV_ITEMS} />
    </header>
  )
}
