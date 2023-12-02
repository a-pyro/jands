import { twMerge } from 'tailwind-merge'

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={twMerge('mt-28 flex flex-col')}>{children}</div>
}

export default SharedLayout
