import { type CreationType } from '@/services/types';

import { type CloudinaryResults, cloudinaryClient } from '../utils/cloudinary';

const cachedResults: { [K in CreationType | 'about']?: CloudinaryResults } = {
  about: undefined,
  customizations: undefined,
  earrings: undefined,
  necklaces: undefined,
  rings: undefined,
  everythingelse: undefined,
};
export const getResults = async ({
  folderName,
  limit = 4,
}: {
  folderName: CreationType | 'about';
  limit?: number;
}) => {
  if (!cachedResults[folderName]) {
    const fetchedResults = (await cloudinaryClient.v2.search
      .max_results(limit)
      .expression(`folder:jands/${folderName}/*`)
      .sort_by('public_id', 'desc')
      .execute()) as CloudinaryResults;

    // eslint-disable-next-line no-console -- wanna know rate limit
    console.log(`
        Fetched ${folderName} from Cloudinary
        Rate limit remaining: ${fetchedResults.rate_limit_remaining}
        Rate limit allowed: ${fetchedResults.rate_limit_allowed}
        Rate limit reset at: ${fetchedResults.rate_limit_reset_at}
        Total count: ${fetchedResults.total_count}
      `);

    cachedResults[folderName] = fetchedResults;
  }
  return cachedResults[folderName];
};
