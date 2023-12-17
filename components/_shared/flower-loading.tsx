/* eslint-disable @next/next/no-img-element -- no need */

import { twJoin } from 'tailwind-merge'

import { getRandomNumber } from '@/utils/ui'

export const FlowerLoading = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={twJoin('h-[100dvh] w-screen', 'absolute inset-0', className)}
    >
      <img
        alt="Loading..."
        className="h-full w-full object-cover object-center"
        src={`/loading/${getRandomNumber(1, 13)}.jpg`}
      />
    </div>
  )
}
