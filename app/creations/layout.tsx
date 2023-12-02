import { twMerge } from 'tailwind-merge'

const CreationsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={twMerge('mt-10 flex flex-col')}>{children}</div>
}

export default CreationsLayout
