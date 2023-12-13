import { SharedLayout } from '@/app/_shared/shared-layout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SharedLayout>{children}</SharedLayout>;
};

export default Layout;
