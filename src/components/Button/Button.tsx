import clsx from 'clsx'
import { FC } from 'react'

import { IconSize } from '../../types/types'
import { Condition } from '../Condition'
import Loader from '../icons/Loader'
import styles from './Button.module.scss'
import { IButtonProps } from './types'

const Button: FC<IButtonProps> = ({
  className = '',
  icon,
  isDisabled = false,
  isLoading = false,
  isRounded = false,
  size = 'M',
  text = '',
  theme = 'primary',
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button_${theme}`],
        styles[`button_${size}`],
        className,
        {
          [styles.onlyIcon]: icon && !text,
          [styles.rounded]: isRounded,
        },
      )}
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
      <Condition match={Boolean(text)}>{text}</Condition>
    </button>
  )
}

export default Button
