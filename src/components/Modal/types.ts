import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
  heading?: string
  isOpen: boolean
  onClose: VoidFunction
}
