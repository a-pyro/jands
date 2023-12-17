'use client'

import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

export function useLogoSize() {
  const { y } = useWindowScroll()

  const [logoSize, setLogoSize] = useState<number>(LOGO_SIZE_INIT.initialSize)

  useEffect(() => {
    setLogoSize(interpolateLogoSize({ scrollPosition: y }))
  }, [y])

  return { logoSize, setLogoSize }
}

const interpolateLogoSize = ({
  scrollPosition,
}: {
  scrollPosition: number
}) => {
  if (scrollPosition <= 0) {
    return LOGO_SIZE_INIT.maxSize
  } else if (scrollPosition >= LOGO_SIZE_INIT.scrollRange) {
    return LOGO_SIZE_INIT.minSize
  }

  const size =
    LOGO_SIZE_INIT.maxSize -
    (scrollPosition / LOGO_SIZE_INIT.scrollRange) *
      (LOGO_SIZE_INIT.maxSize - LOGO_SIZE_INIT.minSize)
  return size
}

export const LOGO_SIZE_INIT = {
  initialSize: 200,
  minSize: 50,
  maxSize: 200,
  scrollRange: 500,
} as const
