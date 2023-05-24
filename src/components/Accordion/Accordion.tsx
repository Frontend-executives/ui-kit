import React, { FC, useRef, useState } from 'react'

import IconChevronDown from '../icons/IconChevronDown'
import styles from './Accordion.module.scss'
import { IAccordionProps } from './types'

const Accordion: FC<IAccordionProps> = ({
  caption = '',
  isDisabled = false,
  text = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    const scrollHeight = contentRef.current?.scrollHeight ?? 1000
    setIsOpen(!isOpen)
    setContentHeight(isOpen ? 0 : scrollHeight)
  }

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionButton} ${isOpen ? styles.active : ''}`}
        disabled={isDisabled}
        onClick={handleToggle}
        type={'button'}
      >
        <span>{caption}</span>
        <IconChevronDown height={24} width={24} />
      </button>
      <div
        className={styles.container}
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div className={styles.wrapper}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
