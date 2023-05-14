import clsx from 'clsx'
import { FC } from 'react'

import { ICON_SIZES, SIZES, THEMES } from '../../utils/constants'
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
  size = SIZES.m,
  text = '',
  theme = THEMES.primary,
}) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles[theme]]: styles[theme],
        [styles[size]]: styles[size],
        [styles.onlyIcon]: icon && !text,
        [styles.rounded]: isRounded,
      })}
      disabled={isDisabled || isLoading}
    >
      <Condition match={isLoading}>
        <Loader
          className={styles.loader}
          height={ICON_SIZES.m}
          width={ICON_SIZES.m}
        />
      </Condition>
      <Condition match={Boolean(!isLoading && icon)}>{icon}</Condition>
      <Condition match={Boolean(text)}>{text}</Condition>
    </button>
  )
}

export default Button
