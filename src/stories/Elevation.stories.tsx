import type { Meta, StoryObj } from '@storybook/react'

import { Elevation } from '../components/Elevation'
import { Slider } from '../components/Slider'
import { StoryContainer } from '../components/StoryContainer'
import { sliderMock } from '../utils/sliderMock'

const meta: Meta<typeof Elevation> = {
  component: Elevation,
  tags: ['autodocs'],
  title: 'Example/Elevation',
}

export default meta
type Story = StoryObj<typeof Elevation>

export const DefaultElevation: Story = {
  render: (args) => (
    <StoryContainer>
      <Elevation {...args}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum
          cupiditate dolorem dolorum ea, enim est exercitationem expedita nobis
          non nostrum, provident quaerat quasi reiciendis rerum saepe suscipit.
          Numquam, porro.
        </p>
      </Elevation>
    </StoryContainer>
  ),
}

export const SliderElevation: Story = {
  render: (args) => (
    <StoryContainer>
      <Elevation {...args}>
        <Slider
          {...args}
          isArrowsDisabled
          isPaginationDisabled
          slidesPerPage={3}
        >
          <img alt={sliderMock.text.first} src={sliderMock.images.first} />
          <img alt={sliderMock.text.second} src={sliderMock.images.second} />
          <img alt={sliderMock.text.third} src={sliderMock.images.third} />
        </Slider>
      </Elevation>
    </StoryContainer>
  ),
}
