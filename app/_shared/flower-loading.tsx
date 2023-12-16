/* eslint-disable @next/next/no-img-element -- no need */

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
export const FlowerLoading = () => {
  return (
    <div className="h-[100dvh] w-screen">
      <img
        alt="Loading..."
        className="z-50 h-full w-full object-cover object-center"
        src={`/loading/${getRandomNumber(1, 13)}.jpg`}
      />
    </div>
  )
}
