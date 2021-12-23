import { useState } from 'react'
import SearchList from '../../components/SearchList'
import PositionButton from '../../components/PositionButton'

const RoutePage = () => {
  const [openSearchList, setOpenSearchList] = useState(false)

  return (
    <>
      {/* <SearchList
        openSearchList={openSearchList}
        unfoldButtonClick={setOpenSearchList}
      /> */}
      <PositionButton openSearchList={openSearchList}/>
    </>
  )
}

export default RoutePage