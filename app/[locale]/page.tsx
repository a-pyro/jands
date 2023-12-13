import { SlideGallery } from '@/components/gallery/slide-gallery';
import { ScrollAdaptiveWrapper } from '@/components/scroll-adaptive-wrapper';
import { getResults } from '@/services/get-results';
import { ALL_CREATIONS_TYPES } from '@/services/types';

export default async function Home() {
  const results = await Promise.all(
    ALL_CREATIONS_TYPES.map((folder) =>
      getResults({ folderName: folder, limit: 4 }),
    ),
  );

  return (
    <ScrollAdaptiveWrapper className="flex flex-col gap-20">
      {results.map((result, index) => (
        <SlideGallery
          images={result?.resources ?? []}
          key={ALL_CREATIONS_TYPES[index]}
          name={ALL_CREATIONS_TYPES[index]}
          route={`/creations/${ALL_CREATIONS_TYPES[index]}`}
          totalCount={result?.total_count ?? 0}
          type={ALL_CREATIONS_TYPES[index]}
        />
      ))}
    </ScrollAdaptiveWrapper>
  );
}
