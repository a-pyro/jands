import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'

const SUPABASE_API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
// const bucketName: BucketName = 'allpic'
export const supabase = createClient<Database>(
  SUPABASE_API_URL,
  SUPABASE_SERVICE_ROLE_KEY,
)
