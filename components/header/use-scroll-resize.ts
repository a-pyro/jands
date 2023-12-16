'use client'

import { useEffect, useState } from 'react'

import { usePathname } from '@/utils/navigation'

export function useScollResize({
  initialSize = HEADER_SCOLL_SIZE_INIT.initialSize,
  minSize = HEADER_SCOLL_SIZE_INIT.minSize,
  maxSize = HEADER_SCOLL_SIZE_INIT.maxSize,
  scrollRange = HEADER_SCOLL_SIZE_INIT.scrollRange,
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

    setLogoSize(maxSize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname, minSize, maxSize, scrollRange])

  return { logoSize, setLogoSize }
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
  }
  return maxSize - (scrollPosition / scrollRange) * (maxSize - minSize)
}

export const HEADER_SCOLL_SIZE_INIT = {
  initialSize: 200,
  minSize: 50,
  maxSize: 200,
  scrollRange: 500,
} as const
