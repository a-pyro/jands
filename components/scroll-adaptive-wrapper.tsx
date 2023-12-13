'use client';
import { twMerge } from 'tailwind-merge';

import {
  HEADER_SCOLL_SIZE_INIT,
  useScollResize,
} from './header/use-scroll-resize';

export const ScrollAdaptiveWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { logoSize } = useScollResize(HEADER_SCOLL_SIZE_INIT);
  return (
    <div
      className={twMerge(className)}
      style={{
        marginTop: `${logoSize}px`,
      }}
    >
      {children}
    </div>
  );
};
