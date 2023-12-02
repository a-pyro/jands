import { createServerClient } from '@/supabase/server'
import { type CreationType } from '@/supabase/types'
import { cookies } from 'next/headers'
import { cache } from 'react'

export const getCreations = cache(async (name: CreationType) => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.from(name).select('*')
  if (error) throw error
  return data
})

export const getAllCreations = cache(async () => {
  const customizationsPromise = getCreations('customizations')
  const earingsPromise = getCreations('earings')
  const everythingelsePromise = getCreations('everythingelse')
  const necklacesPromise = getCreations('necklaces')
  const ringsPromise = getCreations('rings')

  try {
    const [customizations, earings, everythingelse, necklaces, rings] =
      await Promise.all([
        customizationsPromise,
        earingsPromise,
        everythingelsePromise,
        necklacesPromise,
        ringsPromise,
      ])
    return [
      ...rings,
      ...customizations,
      ...earings,
      ...everythingelse,
      ...necklaces,
    ]
  } catch (error) {
    throw error
  }
})
