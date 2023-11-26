import { supabase } from '.'
import { CreationToApi } from './supabase'
export const BUCKET_NAMES = [
  'rings',
  'necklaces',
  'everythingelse',
  'earings',
  'customizations',
  'about',
] as const
export const TABLE_NAMES = ['necklaces'] as const

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

// listBucketData({ bucketName: BUCKET_NAMES[0] })
//   .then((data) => data)
//   .then((data) => getPublicUrls({ files: data, bucketName: BUCKET_NAMES[0] }))
//   .then((data) => insertIntoTable({ urls: data, tableName: TABLE_NAMES[0] }))
