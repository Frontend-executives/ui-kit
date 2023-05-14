import clsx from 'clsx'
import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { ICON_SIZES } from '../../utils/constants'
import { Button } from '../Button'
import IconClose from '../icons/Close'
import { Typography } from '../Typography'
import styles from './Modal.module.scss'
import { IModalProps } from './types'

const Modal: FC<IModalProps> = ({
  children,
  heading = '',
  isOpen,
  onClose,
}) => {
  const [modalElement] = useState(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    return div
  })

  useEffect(() => {
    return () => {
      document.body.removeChild(modalElement)
    }
  }, [modalElement])

  return createPortal(
    <div
      className={clsx(styles.modal, {
        [styles.hidden]: !isOpen,
      })}
    >
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <div className={styles.header}>
          <Typography element='h3'>{heading}</Typography>
          <Button
            className={styles.button}
            icon={<IconClose height={ICON_SIZES.s} width={ICON_SIZES.s} />}
            onClick={onClose}
            size='xs'
          />
        </div>
        {children}
      </div>
    </div>,
    modalElement,
  )
}

export default Modal
