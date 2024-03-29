import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Create() {
  return (
    <>
      <HeadMeta title={'Create'} />
      <div>Create</div>
    </>
  )
}

Create.getLayout = getLayout
export default Create
