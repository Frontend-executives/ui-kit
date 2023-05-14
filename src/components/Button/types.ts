import { ReactNode } from 'react'

import { SIZES, THEMES } from '../../utils/constants'

export interface IButtonProps {
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  size?: (typeof SIZES)[keyof typeof SIZES]
  text?: string
  theme?: (typeof THEMES)[keyof typeof THEMES]
}
