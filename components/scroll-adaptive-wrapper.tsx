// 'use client'

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
      className={className}
      // style={{
      // marginTop: `${logoSize}px`,
      // }}
    >
      {children}
    </div>
  )
}
