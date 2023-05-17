import { ReactElement } from 'react'

import { SPACING } from '../../utils/constants'

export interface ISliderProps {
  children: ReactElement | ReactElement[]
  gap?: (typeof SPACING)[keyof typeof SPACING]
  isArrowsDisabled?: boolean
  isAutoPlay?: boolean
  isPaginationDisabled?: boolean
  onClick?: VoidFunction
  padding?: (typeof SPACING)[keyof typeof SPACING]
  slidesPerPage?: number
}
