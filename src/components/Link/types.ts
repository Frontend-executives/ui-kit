import { ReactNode } from 'react'

export interface ILinkProps {
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  isExternal?: boolean
  isLoading?: boolean
  isRounded?: boolean
  text?: string
  theme?: 'primary' | 'failed' | 'success' | 'warning'
}
