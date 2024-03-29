import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Favorites() {
  return (
    <>
      <HeadMeta title={'Favorites'} />
      <div>Favorites</div>
    </>
  )
}

Favorites.getLayout = getLayout
export default Favorites
