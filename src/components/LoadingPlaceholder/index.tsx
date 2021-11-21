import { LoadingWrapper, ElementWrapper } from './style'

function LoadingPlaceholder() {
  return (
    <LoadingWrapper>
      <ElementWrapper>
        <i className="fas fa-spinner"></i>
      </ElementWrapper>
    </LoadingWrapper>
  )
}

export default LoadingPlaceholder