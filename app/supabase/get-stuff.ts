import { supabase } from '.'
import { TABLE_NAMES } from './seed'

export const getAllCreations = async () => {
  // check if i need to create this always
  const { data, error } = await supabase.from(TABLE_NAMES[0]).select()
  console.log('🚀 ~ getAllCreations ~ data:', data?.length)
  if (error) throw error
  return data
}
