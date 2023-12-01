import { type CreationType } from '@/supabase/types'
import cloudinary, { type CloudinaryResults } from './cloudinary'

let cachedResults: CloudinaryResults

export default async function getResults({
  folderName,
}: {
  folderName: CreationType
}) {
  try {
    if (!cachedResults) {
      const fetchedResults = (await cloudinary.v2.search
        .expression(`folder:jands/${folderName}/*`)
        .sort_by('public_id', 'desc')
        .execute()) as CloudinaryResults

      console.log('fetchedResults:', fetchedResults)

      cachedResults = fetchedResults
    }

    return cachedResults
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
