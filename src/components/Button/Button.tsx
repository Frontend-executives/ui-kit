import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  theme?: 'primary' | 'failed' | 'success'
  children: ReactNode
}

const Button: FC<IButtonProps> = ({
  children,
  className = '',
  isDisabled = false,
  isLoading = false,
  theme = 'primary',
}) => {
  return (
    <button
      className={clsx(styles.button, styles[`button_${theme}`], className)}
      disabled={isDisabled || isLoading}
    >
      {children}
      {isLoading && <span className={styles.loader} />}
    </button>
  )
}

export default Button
