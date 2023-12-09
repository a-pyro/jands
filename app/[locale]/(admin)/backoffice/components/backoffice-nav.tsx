import { Link } from '@/utils/navigation'
import { SignoutButton } from '../../signin/components/signout'
import Button from '@/components/buttons/button'

export const BackOfficeNav = () => {
  return (
    <aside className="flex flex-col">
      <h2 className="text-2xl font-bold">Backoffice Nav</h2>
      <Button>
        <Link href="/backoffice">/backoffice</Link>
      </Button>
      <SignoutButton />
    </aside>
  )
}
