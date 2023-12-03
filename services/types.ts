export const ALL_CREATIONS_TYPES = [
  'necklaces',
  'rings',
  'earrings',
  'customizations',
  'everythingelse',
] as const

export type CreationType = (typeof ALL_CREATIONS_TYPES)[number]
