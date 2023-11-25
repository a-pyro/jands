import { supabase } from '.'
import { TABLE_NAMES } from './seed'

export const getAllCreations = async () => {
  const { data, error } = await supabase.from(TABLE_NAMES[0]).select()
  if (error) throw error
  return data
}
