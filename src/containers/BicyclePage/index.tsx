import { useState } from 'react'
import { useMap } from 'react-leaflet'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { displayTypeUpdateAction } from '../../store/displayType'
import ResultCard, { BadgeClick } from '../../components/StationCard'
import ProblemPlaceholder from '../../components/ProblemPlaceholder'
import { Problems } from '../../constants'
import LoadingPlaceholder from '../../components/LoadingPlaceholder'
import SearchList from '../../components/SearchList'
import PositionButton from '../../components/PositionButton'
import ToggleDisplayButton from '../../components/ToggleDisplayButton'
import { stationRequestAction } from '../../store/station'

const BicyclePage = () => {
  const map = useMap()
  const dispatch = useDispatch<AppDispatch>()
  const { type } = useSelector((state: RootState) => state.displayType)
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.station
  )
  const [openSearchList, setOpenSearchList] = useState(false)

  const badgeClickHandler: BadgeClick = (targetType, targetData) => {
    if (type !== targetType) {
      dispatch(displayTypeUpdateAction({ type: targetType }))
    }
    map.flyTo(
      [
        targetData.StationPosition.PositionLat,
        targetData.StationPosition.PositionLon,
      ],
      undefined,
      { animate: false }
    )
  }

  const submitHandler = (keyword: string, city: string) => {
    dispatch(stationRequestAction({ keyword, city }))
  }

  return (
    <>
      <SearchList
        openSearchList={openSearchList}
        toggleSearchList={setOpenSearchList}
        placeholderText={'搜尋站點'}
        submitHandler={submitHandler}
      >
        {pedding && <LoadingPlaceholder />}
        {error && <ProblemPlaceholder problem={Problems.Error} />}
        {!pedding &&
          !error &&
          (data.length > 0 ? (
            data.map((station) => (
              <ResultCard
                key={station.StationID}
                station={station}
                badgeClick={badgeClickHandler}
              />
            ))
          ) : (
            <ProblemPlaceholder problem={Problems.NoResult} />
          ))}
      </SearchList>
      <ToggleDisplayButton />
      <PositionButton openSearchList={openSearchList} />
    </>
  )
}

export default BicyclePage
