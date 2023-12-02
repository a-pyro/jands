import { twMerge } from 'tailwind-merge'

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={twMerge('container mt-28 flex flex-col px-3')}>
      {children}
    </div>
  )
}

export default SharedLayout
