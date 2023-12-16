/* eslint-disable @next/next/no-img-element -- no need */

import { twMerge } from 'tailwind-merge'

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const FlowerLoading = ({ className = '' }: { className?: string }) => {
  return (
    <div className={twMerge('h-[100dvh] w-screen', className)}>
      <img
        alt="Loading..."
        className="z-50 h-full w-full object-cover object-center"
        src={`/loading/${getRandomNumber(1, 13)}.jpg`}
      />
    </div>
  )
}
