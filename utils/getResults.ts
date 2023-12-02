import { type CreationType } from '@/supabase/types'
import cloudinary, { type CloudinaryResults } from './cloudinary'

const cachedResults: { [K in CreationType | 'about']?: CloudinaryResults } = {
  about: undefined,
  customizations: undefined,
  earings: undefined,
  necklaces: undefined,
  rings: undefined,
  everythingelse: undefined,
}

export default async function getResults({
  folderName,
  limit = 4,
}: {
  folderName: CreationType | 'about'
  limit?: number
}) {
  try {
    if (!cachedResults[folderName]) {
      const fetchedResults = (await cloudinary.v2.search
        .max_results(limit)
        .expression(`folder:jands/${folderName}/*`)
        .sort_by('public_id', 'desc')
        .execute()) as CloudinaryResults

      console.log(`
        Fetched ${folderName} from Cloudinary
        Rate limit remaining: ${fetchedResults.rate_limit_remaining}
        Rate limit allowed: ${fetchedResults.rate_limit_allowed}
        Rate limit reset at: ${fetchedResults.rate_limit_reset_at}
        Total count: ${fetchedResults.total_count}
      `)

      cachedResults[folderName] = fetchedResults
    }
    return cachedResults[folderName]
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
