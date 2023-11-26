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
  // for each tables get elements, id and delete
  for (const tableName of TABLE_NAMES) {
    console.log(`Getting ${tableName} elements --------------`)

    // get all elements from table
    const { data, error } = await supabase.from(tableName).select()
    if (error) throw error
    console.log(`Got ${data.length} elements from ${tableName} --------------`)

    console.log(`Deleting ${tableName} elements --------------`)
    // delete all elements from table
    for (const element of data) {
      const { error: deleteError } = await supabase
        .from(tableName)
        .delete()
        .eq('id', element.id)
      if (deleteError) throw deleteError
    }
    console.log(`Deleted ${data.length} elements from ${tableName}`)
  }

  console.log(`Getting files from buckets --------------`)
  for (const bucketName of BUCKET_NAMES) {
    // get all files from bucket
    console.log(`Getting files from ${bucketName} --------------`)
    const { data, error } = await supabase.storage.from(bucketName).list()
    if (error) throw error
    console.log(`Got ${data.length} files from ${bucketName} --------------`)

    console.log(`Getting public urls from ${bucketName}`)
    // get all public urls
    const urls = await Promise.all(
      data.map(
        (file) =>
          supabase.storage.from(bucketName).getPublicUrl(file.name).data
            .publicUrl,
      ),
    )
    console.log(
      `Got ${urls.length} public urls from ${bucketName} --------------`,
    )

    console.log(`Inserting urls into table ${bucketName} --------------`)
    // insert all urls into table
    const { error: insertError } = await supabase
      .from(bucketName)
      .insert(urls.map((src) => ({ src })))
    if (insertError) throw insertError
    console.log(
      `Inserted ${urls.length} urls into table ${bucketName} --------------`,
    )
  }
}
