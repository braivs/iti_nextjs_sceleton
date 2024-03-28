import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

function SignUp() {
  return (
    <>
      <HeadMeta title={'SignUp'} />
      <div>SignUp</div>
    </>
  )
}

SignUp.getLayout = getLayout
export default SignUp
