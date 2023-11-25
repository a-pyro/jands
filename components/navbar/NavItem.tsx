import Link from 'next/link'

export interface NavItemProps {
  name: string
  href: string
}
export default function NavItem({ name, href }: NavItemProps) {
  return (
    <Link href={href} className="text-red-500">
      {name}{' '}
    </Link>
  )
}
