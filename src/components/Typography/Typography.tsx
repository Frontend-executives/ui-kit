import clsx from 'clsx'
import { createElement, FC } from 'react'

import { ITypographyProps } from './types'
import styles from './Typography.module.scss'

const Typography: FC<ITypographyProps> = ({
  children = '',
  className = '',
  element = 'p',
  isUnderLine = false,
  isUpperCase = false,
  type = 'bodyMedium',
}) => {
  return createElement(
    element,
    {
      className: clsx(styles.typography, styles[type], className, {
        [styles.upperCase]: isUpperCase,
        [styles.underLine]: isUnderLine,
      }),
    },
    children ?? null,
  )
}

export default Typography
