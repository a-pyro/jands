import { createServerClient } from '@/app/supabase/server'
import { CreationType } from '@/app/supabase/types'
import { cookies } from 'next/headers'

export const getCreations = async (name: CreationType) => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.from(name).select('*')
  if (error) throw error
  return data
}
