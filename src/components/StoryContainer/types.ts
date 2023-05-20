import { ReactNode } from 'react'
import Dict = NodeJS.Dict

export interface IStoryContainerProps {
  children: ReactNode
  style?: Dict<string>
}
