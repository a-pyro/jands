import Image from 'next/image'
import infinity from '../../public/infinity-spinner.svg'
export const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src={infinity} alt="Loading..." width={200} height={200} />
    </div>
  )
}
