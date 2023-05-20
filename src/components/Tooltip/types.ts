import { ReactNode } from 'react'

import { THEMES } from '../../utils/constants'

export interface ITooltipProps {
  children: ReactNode
  position?: 'top' | 'left' | 'bottom' | 'right'
  text: string
  variant?: (typeof THEMES)[keyof typeof THEMES]
}
