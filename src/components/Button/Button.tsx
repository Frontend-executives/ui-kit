import clsx from 'clsx'
import { FC } from 'react'

import { IconSize } from '../../types/types'
import { Condition } from '../Condition'
import Loader from '../icons/Loader'
import styles from './Button.module.scss'
import { IButtonProps } from './types'

const Button: FC<IButtonProps> = ({
  children,
  className = '',
  icon,
  isDisabled = false,
  isLoading = false,
  theme = 'primary',
}) => {
  return (
    <button
      className={clsx(styles.button, styles[`button_${theme}`], className, {
        [styles.onlyIcon]: icon && !children,
      })}
      disabled={isDisabled || isLoading}
    >
      <Condition match={isLoading}>
        <Loader
          className={styles.loader}
          height={IconSize.M}
          width={IconSize.M}
        />
      </Condition>
      <Condition match={Boolean(!isLoading && icon)}>{icon}</Condition>
      <Condition match={Boolean(children)}>{children}</Condition>
    </button>
  )
}

export default Button
