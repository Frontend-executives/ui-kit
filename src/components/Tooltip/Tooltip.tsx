import 'react-tooltip/dist/react-tooltip.css'

import clsx from 'clsx'
import { FC } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { THEMES } from '../../utils/constants'
import styles from './Tooltip.module.scss'
import { ITooltipProps } from './types'

const Tooltip: FC<ITooltipProps> = ({
  children,
  position,
  text,
  variant = THEMES.black,
}) => {
  return (
    <div>
      <ReactTooltip
        className={clsx(styles.tooltip, styles[variant])}
        content={text}
        id={text}
        place={position}
      />
      <div className={styles.element} data-tooltip-id={text}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip
