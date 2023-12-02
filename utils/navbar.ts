import { type NavItemProps } from '@/components/nav/navitem'

export const MAIN_NAV_ITEMS: NavItemProps<string>[] = [
  {
    route: '/creations',
    name: 'Home',
  },
  {
    route: '/creations',
    name: 'Creazioni',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/contact',
    name: 'Contatti',
  },
]

export const CREATIONS_NAV_ITEMS: NavItemProps<string>[] = [
  {
    route: '/creations/customizations',
    name: 'Personalizzazioni',
  },
  {
    route: '/creations/earings',
    name: 'Orecchini',
  },
  {
    route: '/creations/everythingelse',
    name: 'Altro',
  },
  {
    route: '/creations/necklaces',
    name: 'Collane',
  },
  {
    route: '/creations/rings',
    name: 'Anelli',
  },
]
