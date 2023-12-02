import Image from 'next/image'
import infinity from '../../public/infinity-spinner.svg'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
export const LoadingScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src={infinity as StaticImport}
        alt="Loading..."
        width={200}
        height={200}
      />
    </div>
  )
}
