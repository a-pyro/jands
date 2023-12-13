import { type ClassNameValue, twMerge } from 'tailwind-merge';

import { ScrollAdaptiveWrapper } from '@/components/scroll-adaptive-wrapper';

export const SharedLayout = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <ScrollAdaptiveWrapper
      className={twMerge('container flex flex-col px-3', className)}
    >
      {children}
    </ScrollAdaptiveWrapper>
  );
};
