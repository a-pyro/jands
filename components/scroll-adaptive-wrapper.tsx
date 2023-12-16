'use client'
import { twMerge } from 'tailwind-merge'

import { LOGO_SIZE_INIT, useLogoSize } from './header/use-logo-size'

export const ScrollAdaptiveWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  const { logoSize } = useLogoSize(LOGO_SIZE_INIT)
  return (
    <div
      className={twMerge(className)}
      style={{
        marginTop: `${logoSize}px`,
      }}
    >
      {children}
    </div>
  )
}
