import { useFetchCats } from 'app/api'
import { setCats } from 'app/stores/actions'
import { RootState } from 'app/stores/mainStore'
import CatImage from 'features/CatImage'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Cats.module.scss'

const Cats = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const cats = useSelector((state: RootState) => state.cats.cats)
  const { data, isLoading, error } = useFetchCats()

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        setHasMore(false)
      } else {
        dispatch(setCats(data))
      }
    }
  }, [data, dispatch])

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  if (isLoading && page === 1) {
    return <h4>Загрузка...</h4>
  }

  if (error) {
    return <p>Ошибка при загрузке данных: {error.message}</p>
  }

  return (
    <div>
      <InfiniteScroll
        className={styles.cats}
        dataLength={cats.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Загрузка...</h4>}
        endMessage={<p>Больше данных нет</p>}
      >
        {cats.map((cat) => (
          <CatImage key={cat.id} cat={cat} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default Cats
