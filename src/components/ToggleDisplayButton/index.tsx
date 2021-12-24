import * as Styled from './styled'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { displayTypeUpdateAction } from '../../store/displayType'
import { DisplayTypes } from '../../constants'

const ToggleDisplayButton = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { type } = useSelector((state: RootState) => state.displayType)

  const toggleDisplayTypeHandler = (value: DisplayTypes) => {
    if (type === value) return
    dispatch(displayTypeUpdateAction({ type: value }))
  }

  return (
    <Styled.ToggleDisplayButtonWrapper>
      <Styled.DisplayButton
        active={type === DisplayTypes.Bike}
        onClick={() => toggleDisplayTypeHandler(DisplayTypes.Bike)}
      >
        <i className="fas fa-bicycle"></i>
        找單車
      </Styled.DisplayButton>
      <Styled.DisplayButton
        active={type === DisplayTypes.Parking}
        onClick={() => toggleDisplayTypeHandler(DisplayTypes.Parking)}
      >
        <i className="fas fa-parking"></i>
        找車位
      </Styled.DisplayButton>
    </Styled.ToggleDisplayButtonWrapper>
  )
}

export default ToggleDisplayButton
