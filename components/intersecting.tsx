'use client'
import { InView } from 'react-intersection-observer'
import { type ClassNameValue, twJoin } from 'tailwind-merge'

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
    <InView delay={500} threshold={0.1} trackVisibility triggerOnce>
      {({ inView, ref }) => {
        return (
          <div
            className={twJoin(inView ? classNameInView : classNameNotInView)}
            ref={ref}
          >
            {children}
          </div>
        )
      }}
    </InView>
  )
}
