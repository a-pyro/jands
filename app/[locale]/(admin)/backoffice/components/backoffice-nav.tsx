import { AuthButton } from '@/components/auth-button'
import { Button } from '@/components/buttons/button'
import { Link } from '@/utils/navigation'

export const BackOfficeNav = () => {
  return (
    <aside className="flex flex-col">
      <h2 className="text-2xl font-bold">Backoffice Nav</h2>
      <Button>
        <Link href="/backoffice">/backoffice</Link>
      </Button>
      <AuthButton />
    </aside>
  )
}
