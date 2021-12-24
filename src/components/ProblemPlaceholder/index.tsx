import React from 'react'
import * as Styled from './style'
import { Problems } from '../../constants'

function ProblemPlaceholder({ problem }: { problem: Problems }) {
  return (
    <Styled.ProblemWrapper>
      <Styled.IconWrapper>
        <i className="fas fa-exclamation-circle"></i>
      </Styled.IconWrapper>
      <div>
        <Styled.ProblemText>
          {problem === Problems.NoResult && '無搜尋相關的內容'}
          {problem === Problems.PageNotFound && '找不到該頁面'}
          {problem === Problems.Error && '伺服器錯誤，請稍後再試'}
        </Styled.ProblemText>
      </div>
    </Styled.ProblemWrapper>
  )
}

export default ProblemPlaceholder
