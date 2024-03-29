import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Statistics() {
  return (
    <>
      <HeadMeta title={'Statistics'} />
      <div>Statistics</div>
    </>
  )
}

Statistics.getLayout = getLayout
export default Statistics
