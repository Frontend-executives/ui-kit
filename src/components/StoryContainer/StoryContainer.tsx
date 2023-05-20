import { FC } from 'react'

import styles from './StoryContainer.module.scss'
import { IStoryContainerProps } from './types'

const StoryContainer: FC<IStoryContainerProps> = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  )
}

export default StoryContainer
