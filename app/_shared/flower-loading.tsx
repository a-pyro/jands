import Image from 'next/image';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const FlowerLoading = () => {
  return (
    <Image
      alt="Loading..."
      className="z-50 object-cover object-center"
      fill
      src={`/loading/${getRandomNumber(1, 13)}.jpg`}
    />
  );
};
