import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Messenger() {
  return (
    <>
      <HeadMeta title={'Messenger'} />
      <div>Messenger</div>
    </>
  )
}

Messenger.getLayout = getLayout
export default Messenger
