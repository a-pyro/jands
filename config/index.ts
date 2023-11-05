export const appRoutes = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
  '/work': 'Work',
} as const

export const appRoutesArray = Object.entries(appRoutes)
