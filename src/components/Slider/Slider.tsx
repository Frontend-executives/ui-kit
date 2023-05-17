import '@splidejs/react-splide/css'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { Children, FC, ReactNode } from 'react'

import { SPACING } from '../../utils/constants'
import { Condition } from '../Condition'
import styles from './Slider.module.scss'
import { ISliderProps } from './types'

const Slider: FC<ISliderProps> = ({
  children,
  gap = SPACING.spacing0,
  isArrowsDisabled = false,
  isAutoPlay = false,
  isPaginationDisabled = false,
  onClick,
  padding = SPACING.spacing0,
  slidesPerPage = 1,
}) => {
  return (
    <Splide
      aria-labelledby='autoplay-example-heading'
      className={styles.slider}
      hasTrack={false}
      options={{
        arrows: !isArrowsDisabled,
        autoplay: isAutoPlay,
        gap,
        padding,
        pagination: !isPaginationDisabled,
        perPage: slidesPerPage,
        rewind: true,
        type: 'loop',
      }}
    >
      <Condition match={Boolean(children)}>
        <SplideTrack>
          {Children.map(children, (child: ReactNode) => (
            <SplideSlide
              className={styles.slide}
              key={nanoid()}
              onClick={onClick}
            >
              {child}
            </SplideSlide>
          ))}
        </SplideTrack>
        <Condition match={isAutoPlay}>
          <div className='splide__progress'>
            <div
              className={clsx('splide__progress__bar', styles.progressBar)}
            />
          </div>
        </Condition>
      </Condition>
    </Splide>
  )
}

export default Slider
