import { ReactNode } from 'react'

export interface IButtonProps {
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  size?: 'S' | 'M' | 'L'
  text?: string
  theme?: 'primary' | 'failed' | 'success' | 'warning'
}
