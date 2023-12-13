import { SharedLayout } from '@/app/_shared/shared-layout';
import { type MetadataProps, getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const metadata = await getMetadata({ locale, localeNamespace: 'contact' });
  return metadata;
}

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <SharedLayout>{children}</SharedLayout>
);

export default ContactLayout;
