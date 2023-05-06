import { ReactNode } from 'react'

export interface IButtonProps {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  theme?: 'primary' | 'failed' | 'success' | 'warning'
}
