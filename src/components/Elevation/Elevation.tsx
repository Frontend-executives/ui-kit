import React, { FC } from 'react'

import styles from './Elevation.module.scss'
import { IElevationProps } from './types'

const Elevation: FC<IElevationProps> = ({ children }) => {
  return <div className={styles.elevation}>{children}</div>
}

export default Elevation
