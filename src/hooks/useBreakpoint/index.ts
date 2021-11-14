import { useMediaQuery } from 'react-responsive'
import { breakpoints } from '../../styles/breakpoint'

function useBreakpoint(bp: string, isMin: boolean = true) {
  return useMediaQuery({ query: `(${isMin ? 'min-width' : 'max-width'}: ${breakpoints[bp]}px)` })
}

export default useBreakpoint