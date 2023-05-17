import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '../components/Slider'
import { StoryContainer } from '../components/StoryContainer'
import { SPACING } from '../utils/constants'
import { sliderMock } from '../utils/sliderMock'

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Example/Slider',
}

export default meta
type Story = StoryObj<typeof Slider>

export const DefaultSlider: Story = {
  render: (args) => (
    <StoryContainer>
      <Slider {...args}>
        <p>{sliderMock.text.first}</p>
        <p>{sliderMock.text.second}</p>
        <p>{sliderMock.text.third}</p>
      </Slider>
      <Slider {...args}>
        <img
          alt={sliderMock.text.first}
          src={sliderMock.images.first}
          width='100%'
        />
        <img
          alt={sliderMock.text.second}
          src={sliderMock.images.second}
          width='100%'
        />
        <img
          alt={sliderMock.text.third}
          src={sliderMock.images.third}
          width='100%'
        />
      </Slider>
    </StoryContainer>
  ),
}

export const SliderWithGapAndPadding: Story = {
  render: (args) => (
    <StoryContainer>
      <Slider {...args} gap={SPACING.spacing4} padding={SPACING.spacing9}>
        <p>{sliderMock.text.first}</p>
        <p>{sliderMock.text.second}</p>
        <p>{sliderMock.text.third}</p>
      </Slider>
      <Slider {...args} gap={SPACING.spacing4} padding={SPACING.spacing9}>
        <img
          alt={sliderMock.text.first}
          src={sliderMock.images.first}
          width='100%'
        />
        <img
          alt={sliderMock.text.second}
          src={sliderMock.images.second}
          width='100%'
        />
        <img
          alt={sliderMock.text.third}
          src={sliderMock.images.third}
          width='100%'
        />
      </Slider>
    </StoryContainer>
  ),
}

export const MultipleSlider: Story = {
  render: (args) => (
    <StoryContainer>
      <Slider {...args} slidesPerPage={2}>
        <p>{sliderMock.text.first}</p>
        <p>{sliderMock.text.second}</p>
        <p>{sliderMock.text.third}</p>
      </Slider>
      <Slider {...args} slidesPerPage={3}>
        <img alt={sliderMock.text.first} src={sliderMock.images.first} />
        <img alt={sliderMock.text.second} src={sliderMock.images.second} />
        <img alt={sliderMock.text.third} src={sliderMock.images.third} />
      </Slider>
    </StoryContainer>
  ),
}

export const AutoplayMultipleSlider: Story = {
  render: (args) => (
    <StoryContainer>
      <Slider
        {...args}
        isArrowsDisabled
        isAutoPlay
        isPaginationDisabled
        slidesPerPage={2}
      >
        <p>{sliderMock.text.first}</p>
        <p>{sliderMock.text.second}</p>
        <p>{sliderMock.text.third}</p>
      </Slider>
      <Slider
        {...args}
        isArrowsDisabled
        isAutoPlay
        isPaginationDisabled
        slidesPerPage={2}
      >
        <img alt={sliderMock.text.first} src={sliderMock.images.first} />
        <img alt={sliderMock.text.second} src={sliderMock.images.second} />
        <img alt={sliderMock.text.third} src={sliderMock.images.third} />
      </Slider>
    </StoryContainer>
  ),
}
