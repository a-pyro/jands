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
  const aboutPromise = getCreations('about')
  const customizationsPromise = getCreations('customizations')
  const earingsPromise = getCreations('earings')
  const everythingelsePromise = getCreations('everythingelse')
  const necklacesPromise = getCreations('necklaces')
  const ringsPromise = getCreations('rings')

  try {
    const [about, customizations, earings, everythingelse, necklaces, rings] =
      await Promise.all([
        aboutPromise,
        customizationsPromise,
        earingsPromise,
        everythingelsePromise,
        necklacesPromise,
        ringsPromise,
      ])
    return [
      ...rings,
      ...about,
      ...customizations,
      ...earings,
      ...everythingelse,
      ...necklaces,
    ]
  } catch (error) {
    throw error
  }
})
