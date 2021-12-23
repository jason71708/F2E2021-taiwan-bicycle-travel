import { useState } from 'react'
import SearchList from '../../components/SearchList'
import PositionButton from '../../components/PositionButton'
import ToggleDisplayButton from '../../components/ToggleDisplayButton'

const BicyclePage = () => {
  const [openSearchList, setOpenSearchList] = useState(false)

  return (
    <>
      <SearchList
        openSearchList={openSearchList}
        unfoldButtonClick={setOpenSearchList}
      />
      <ToggleDisplayButton />
      <PositionButton openSearchList={openSearchList}/>
    </>
  )
}

export default BicyclePage