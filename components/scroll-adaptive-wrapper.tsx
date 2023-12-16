// 'use client'
import { twMerge } from 'tailwind-merge'

// import { useLogoSize } from './header/use-logo-size'

export const ScrollAdaptiveWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  // const { logoSize } = useLogoSize()
  return (
    <div
      className={twMerge(className)}
      // style={{
      // marginTop: `${logoSize}px`,
      // }}
    >
      {children}
    </div>
  )
}
