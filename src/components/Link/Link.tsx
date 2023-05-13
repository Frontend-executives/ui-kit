import clsx from 'clsx'
import React, { FC } from 'react'

import { Condition } from '../Condition'
import IconExternal from '../icons/External'
import styles from './Link.module.scss'
import { ILinkProps } from './types'

const Link: FC<ILinkProps> = ({ isDisabled, isExternal, text = 'Primary' }) => {
  const externalAttributes = isExternal
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}
  return (
    <a
      className={clsx(styles.link, {
        [styles.link_external]: isExternal,
        [styles.link_disabled]: isDisabled,
      })}
      href='https://www.google.com'
      {...externalAttributes}
    >
      {text}
      <Condition match={Boolean(isExternal)}>
        <IconExternal className='icon' />
      </Condition>
    </a>
  )
}

export default Link
