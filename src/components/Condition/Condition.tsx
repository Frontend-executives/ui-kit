import { createElement, FC, Fragment } from 'react'

import { IConditionProps } from './types'

const Condition: FC<IConditionProps> = ({ children, match }) => {
  if (match) {
    return createElement(Fragment, {}, children)
  }
  return null
}

export default Condition
