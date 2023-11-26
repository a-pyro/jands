import { cookies } from 'next/headers'
import { createServerClient } from './server'
export const BUCKET_NAMES = [
  'rings',
  'necklaces',
  'everythingelse',
  'earings',
  'customizations',
  'about',
] as const
export const TABLE_NAMES = [...BUCKET_NAMES] as const

export type BucketName = (typeof BUCKET_NAMES)[number]
export type TableName = (typeof TABLE_NAMES)[number]

/** from a bucket build the correspoding table */
export const seedDbFromBuckets = async () => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  // drop all tables
  for (const tableName of TABLE_NAMES) {
    const { error: dropError } = await supabase.from(tableName).delete()
    if (dropError) throw dropError
  }

  for (const bucketName of BUCKET_NAMES) {
    // get all files from bucket
    const { data, error } = await supabase.storage.from(bucketName).list()
    if (error) throw error

    // get all public urls
    const urls = await Promise.all(
      data.map(
        (file) =>
          supabase.storage.from(bucketName).getPublicUrl(file.name).data
            .publicUrl,
      ),
    )

    // insert all urls into table
    const { error: insertError } = await supabase
      .from(bucketName)
      .insert(urls.map((src) => ({ src })))
    if (insertError) throw insertError
  }
}
