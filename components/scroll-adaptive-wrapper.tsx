'use client'
import { twMerge } from 'tailwind-merge'
import {
  useScollResize,
  HEADER_SCOLL_SIZE_INIT,
} from './header/use-scroll-resize'

export const ScrollAdaptiveWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  const { logoSize } = useScollResize(HEADER_SCOLL_SIZE_INIT)
  return (
    <div
      style={{
        marginTop: `${logoSize}px`,
      }}
      className={twMerge(className)}
    >
      {children}
    </div>
  )
}

export default ScrollAdaptiveWrapper
