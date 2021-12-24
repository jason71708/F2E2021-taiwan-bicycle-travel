import * as Styled from './style'

function LoadingPlaceholder() {
  return (
    <Styled.LoadingWrapper>
      <Styled.ElementWrapper>
        <i className="fas fa-spinner"></i>
      </Styled.ElementWrapper>
    </Styled.LoadingWrapper>
  )
}

export default LoadingPlaceholder
