import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function LogOut() {
  return (
    <>
      <HeadMeta title={'Log Out'} />
      <div>Log Out</div>
    </>
  )
}

LogOut.getLayout = getLayout
export default LogOut
