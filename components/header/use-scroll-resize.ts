import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function useScollResize({
  initialSize = 200,
  minSize = 50,
  maxSize = 200,
  scrollRange = 500,
}: {
  initialSize: number
  minSize: number
  maxSize: number
  scrollRange: number
}) {
  const [logoSize, setLogoSize] = useState(initialSize)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setLogoSize(
        interpolateLogoSize({
          minSize,
          maxSize,
          scrollRange,
          scrollPosition,
        }),
      )
    }

    if (pathname === '/') {
      setLogoSize(maxSize)
      window.addEventListener('scroll', handleScroll)
    }

    if (pathname !== '/') {
      setLogoSize(minSize)
      window.removeEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname, minSize, maxSize, scrollRange])

  return logoSize
}

const interpolateLogoSize = ({
  minSize,
  maxSize,
  scrollRange,
  scrollPosition,
}: {
  minSize: number
  maxSize: number
  scrollRange: number
  scrollPosition: number
}) => {
  if (scrollPosition <= 0) {
    return maxSize
  } else if (scrollPosition >= scrollRange) {
    return minSize
  } else {
    return maxSize - (scrollPosition / scrollRange) * (maxSize - minSize)
  }
}

export const HEADER_SCOLL_SIZE_INIT = {
  initialSize: 200,
  minSize: 50,
  maxSize: 200,
  scrollRange: 500,
} as const
