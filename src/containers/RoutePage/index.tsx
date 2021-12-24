import { useEffect, useState } from 'react'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import SearchList from '../../components/SearchList'
import PositionButton from '../../components/PositionButton'
import RouteItem from '../../components/RouteItem'
import { routeRequestAction, routeClearAction } from '../../store/route'
import ProblemPlaceholder from '../../components/ProblemPlaceholder'
import { Problems } from '../../constants'
import LoadingPlaceholder from '../../components/LoadingPlaceholder'

const RoutePage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.route
  )
  const [openSearchList, setOpenSearchList] = useState(false)

  const submitHandler = (keyword: string, city: string) => {
    dispatch(routeRequestAction({ keyword, city }))
  }

  useEffect(() => {
    return () => {
      dispatch(routeClearAction())
    }
  }, [dispatch])

  return (
    <>
      <SearchList
        openSearchList={openSearchList}
        toggleSearchList={setOpenSearchList}
        submitHandler={submitHandler}
        placeholderText={'搜尋路線'}
      >
        {pedding && <LoadingPlaceholder />}
        {error && <ProblemPlaceholder problem={Problems.Error} />}
        {!pedding &&
          !error &&
          (data.length > 0 ? (
            data.map((route) => (
              <RouteItem key={route.RouteName} route={route} />
            ))
          ) : (
            <ProblemPlaceholder problem={Problems.NoResult} />
          ))}
      </SearchList>
      <PositionButton openSearchList={openSearchList} />
    </>
  )
}

export default RoutePage
