import { FC } from 'react'

import styles from './StoryContainer.module.scss'
import { IStoryContainerProps } from './types'

const StoryContainer: FC<IStoryContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default StoryContainer
