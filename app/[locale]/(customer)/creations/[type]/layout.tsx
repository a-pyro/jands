import { getTranslations } from 'next-intl/server';

import { SharedLayout } from '@/app/_shared/shared-layout';
import { Locale } from '@/i18n';
import { type CreationType } from '@/services/types';

type MetadataProps = {
  params: {
    locale: Locale;
    type: CreationType;
  };
};

export async function generateMetadata({
  params: { locale, type },
}: MetadataProps) {
  const t = await getTranslations({
    locale,
    namespace: 'creations',
  });

  return {
    title: `${t('metadata.title')} ${t(`${type}.title`)}`,
    description: t(`${type}.description`),
  };
}

const CreationsLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
);

export default CreationsLayout;
