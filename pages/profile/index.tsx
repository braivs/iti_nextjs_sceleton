import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

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
