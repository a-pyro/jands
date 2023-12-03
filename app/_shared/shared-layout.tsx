import ScrollAdaptiveWrapper from '@/components/scroll-adaptive-wrapper'

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollAdaptiveWrapper className="container flex flex-col px-3">
      {children}
    </ScrollAdaptiveWrapper>
  )
}

export default SharedLayout
