import { ToggleDisplayButtonWrapper, DisplayButton } from './styled'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { displayTypeUpdateAction } from '../../store/displayType'
import { DisplayTypes } from '../../constants'

const ToggleDisplayButton = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { type } = useSelector(
    (state: RootState) => state.displayType
  )

  const toggleDisplayTypeHandler = (value: DisplayTypes) => {
    if (type === value) return
    dispatch(displayTypeUpdateAction({ type: value }))
  }

  return (
    <ToggleDisplayButtonWrapper>
      <DisplayButton active={type === DisplayTypes.Bike} onClick={() => toggleDisplayTypeHandler(DisplayTypes.Bike)}>
        <i className="fas fa-bicycle"></i>
        找單車
      </DisplayButton>
      <DisplayButton active={type === DisplayTypes.Parking} onClick={() => toggleDisplayTypeHandler(DisplayTypes.Parking)}>
        <i className="fas fa-parking"></i>
        找車位
      </DisplayButton>
    </ToggleDisplayButtonWrapper>
  )
}

export default ToggleDisplayButton