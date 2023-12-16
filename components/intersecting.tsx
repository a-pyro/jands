'use client'
import { InView } from 'react-intersection-observer'
import { ClassNameValue, twJoin } from 'tailwind-merge'

export const Intersecting = ({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode
  classNameInView?: ClassNameValue
  classNameNotInView?: ClassNameValue
}) => {
  return (
    <InView threshold={0.1} triggerOnce>
      {({ inView, ref }) => (
        <div
          className={twJoin(inView ? classNameInView : classNameNotInView)}
          ref={ref}
        >
          {children}
        </div>
      )}
    </InView>
  )
}
