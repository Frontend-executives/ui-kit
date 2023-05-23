import clsx from 'clsx'
import { createElement, FC } from 'react'

import { ITypographyProps } from './types'
import styles from './Typography.module.scss'

const Typography: FC<ITypographyProps> = ({
  children = '',
  className = '',
  element = 'p',
  isUnderline = false,
  isUppercase = false,
  size = 'M',
  type = 'paragraph',
}) => {
  return createElement(
    element,
    {
      className: clsx(
        styles.typography,
        styles[type],
        styles[size],
        className,
        {
          [styles.uppercase]: isUppercase,
          [styles.underline]: isUnderline,
        },
      ),
    },
    children ?? null,
  )
}

export default Typography
