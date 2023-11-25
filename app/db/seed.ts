import { createClient } from '@supabase/supabase-js'
import { CreationToApi } from './schema'

const SUPABASE_API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
// const bucketName: BucketName = 'allpic'
export const supabase = createClient(
  SUPABASE_API_URL,
  SUPABASE_SERVICE_ROLE_KEY,
)

const BUCKET_NAMES = ['allpic'] as const
const TABLE_NAMES = ['necklaces'] as const

export type BucketName = (typeof BUCKET_NAMES)[number]
export type TableName = (typeof TABLE_NAMES)[number]

export const listBucketData = async ({
  bucketName,
  folder,
}: {
  bucketName: BucketName
  folder?: string
}) => {
  const { data, error } = await supabase.storage.from(bucketName).list(folder)
  if (error) throw error
  return data
}

const getFileNameWithFolder = (folder?: string) => (file: { name: string }) =>
  folder ? `${folder}/${file.name}` : file.name

export const getPublicUrls = async ({
  files,
  bucketName,
  folder,
}: {
  files: { name: string }[]
  bucketName: BucketName
  folder?: string
}) => {
  const urls = files
    ?.map((file) =>
      supabase.storage
        .from(bucketName)
        .getPublicUrl(getFileNameWithFolder(folder)(file)),
    )
    .map(({ data }) => data.publicUrl)
  return urls
}

export const insertIntoTable = async ({
  urls,
  tableName,
}: {
  urls: string[]
  tableName: TableName
}) => {
  try {
    await Promise.all(
      urls?.map((url) =>
        supabase.from(tableName).insert<CreationToApi>({ src: url }),
      ),
    )
  } catch (error) {
    throw error
  }
}

// const data = await listBucketData({ bucketName })
// const urls = await getPublicUrls({ files: data, bucketName })
// await insertIntoTable({ urls })
