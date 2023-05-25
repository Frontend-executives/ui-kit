import clsx from 'clsx'
import { FC, useRef, useState } from 'react'

import { ICON_SIZES } from '../../utils/constants'
import Button from '../Button/Button'
import IconChevronDown from '../icons/IconChevronDown'
import Typography from '../Typography/Typography'
import styles from './Accordion.module.scss'
import { IAccordionProps } from './types'

const Accordion: FC<IAccordionProps> = ({
  caption,
  isDisabled = false,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const onToggle = () => {
    const scrollHeight = contentRef.current?.scrollHeight ?? 1000
    setIsOpen(!isOpen)
    setContentHeight(isOpen ? 0 : scrollHeight)
  }

  return (
    <div className={styles.accordion}>
      <Button
        className={clsx(styles.button, { [styles.active]: isOpen })}
        icon={<IconChevronDown height={ICON_SIZES.l} width={ICON_SIZES.l} />}
        isDisabled={isDisabled}
        onClick={onToggle}
        text={caption}
      />
      <div
        className={styles.container}
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div className={styles.wrapper}>
          <Typography size='M' type='paragraph'>
            {text}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Accordion
