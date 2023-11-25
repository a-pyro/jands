// import Gallery from '@/components/images/Gallery'
import { getAllCreations } from './db/get-stuff'

export default async function Home() {
  const data = await getAllCreations()
  console.log('🚀 ~ Home ~ data:', data)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((creation) => (
        <div key={creation.src}>{creation.src}</div>
      ))}
      {/* <Gallery creations={data}  /> */}
    </div>
  )
}
