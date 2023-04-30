import clsx from 'clsx'
import { createElement, FC } from 'react'

import styles from './Typography.module.scss'

interface ITypographyProps {
  children: string,
  className?: string
  element?: string
}

const Typography: FC<ITypographyProps> = ({
  children = '',
  className = '',
  element = 'p',
}) => {
  return createElement(
    element,
    { className: clsx(styles.typography, className) },
    children ?? null,
  )
}

export default Typography
