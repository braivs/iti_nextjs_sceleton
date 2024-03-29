import { getLayout } from '@/components/Layout/Layout'
import { HeadMeta } from 'components/HeadMeta/HeadMeta'

function Search() {
  return (
    <>
      <HeadMeta title={'Search'} />
      <div>Search</div>
    </>
  )
}

Search.getLayout = getLayout
export default Search
