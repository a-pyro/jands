import Link from 'next/link'

export interface NavItemProps {
  name: string
  href: string
}
export default function NavItem({ name, href }: NavItemProps) {
  return <Link href={href}> {name} </Link>
}
