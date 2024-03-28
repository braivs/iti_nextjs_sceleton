import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

function SignIn() {
  return (
    <>
      <HeadMeta title={'SignIn'} />
      <div>SignIn</div>
    </>
  )
}

SignIn.getLayout = getLayout
export default SignIn
