import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

const SharedLayout = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: ClassNameValue
}) => {
  return (
    <ScrollAdaptiveWrapper
      className={twMerge('container flex flex-col px-3', className)}
    >
      {children}
    </ScrollAdaptiveWrapper>
  )
}

export default SharedLayout
