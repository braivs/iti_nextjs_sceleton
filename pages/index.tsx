import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

function Home() {
  return (
    <>
      <HeadMeta title={'Home'} />
      <div>Home</div>
    </>
  )
}

Home.getLayout = getLayout
export default Home
