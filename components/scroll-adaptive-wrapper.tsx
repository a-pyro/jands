'use client'
import {
  useScollResize,
  HEADER_SCOLL_SIZE_INIT,
} from './header/use-scroll-resize'

export const ScrollAdaptiveWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const headerSize = useScollResize(HEADER_SCOLL_SIZE_INIT)
  return (
    <div
      style={{
        marginTop: `${headerSize + 100}px`,
      }}
    >
      {children}
    </div>
  )
}

export default ScrollAdaptiveWrapper
