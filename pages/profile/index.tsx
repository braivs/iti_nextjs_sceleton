import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Profile() {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <div>Profile</div>
    </>
  )
}

Profile.getLayout = getLayout
export default Profile
