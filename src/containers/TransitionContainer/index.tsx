import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './transition.css'

const TransitionContainer = ({
  show,
  children,
}: {
  show: boolean
  children: React.ReactNode
}) => {
  return (
    <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
      {children}
    </CSSTransition>
  )
}

export default TransitionContainer
