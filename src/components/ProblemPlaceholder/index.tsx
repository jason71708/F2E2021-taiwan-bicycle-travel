import React from 'react'
import { ProblemWrapper, ProblemText, IconWrapper } from './style'
import { Problems } from '../../constants'

function ProblemPlaceholder({ problem }: { problem: Problems }) {
  return (
    <ProblemWrapper>
      <IconWrapper>
        <i className="fas fa-exclamation-circle"></i>
      </IconWrapper>
      <div>
        <ProblemText>
          {problem === Problems.NoResult && '無搜尋相關的內容'}
          {problem === Problems.PageNotFound && '找不到該頁面'}
          {problem === Problems.Error && '伺服器錯誤，請稍後再試'}
        </ProblemText>
      </div>
    </ProblemWrapper>
  )
}

export default ProblemPlaceholder