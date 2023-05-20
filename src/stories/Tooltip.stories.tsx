import type { Meta, StoryObj } from '@storybook/react'

import IconQuestionCircle from '../components/icons/Question'
import { StoryContainer } from '../components/StoryContainer'
import { Tooltip } from '../components/Tooltip'
import { ICON_SIZES } from '../utils/constants'
import { sliderMock } from '../utils/sliderMock'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Example/Tooltip',
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const DefaultTooltip: Story = {
  render: (args) => (
    <StoryContainer style={{ justifyContent: 'space-between' }}>
      <Tooltip
        {...args}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet architecto, culpa delectus doloremque doloribus fugit id in minus nam natus nisi, nulla optio praesentium ratione reiciendis velit, voluptates.'
        }
        variant='success'
      >
        <IconQuestionCircle height={ICON_SIZES.m} width={ICON_SIZES.m} />
      </Tooltip>
      <Tooltip {...args} text={'Lorem.'} variant='error'>
        <p>Hover me</p>
      </Tooltip>
      <Tooltip
        {...args}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet architecto'
        }
      >
        <img
          alt={sliderMock.text.first}
          height={100}
          src={sliderMock.images.first}
          width={100}
        />
      </Tooltip>
    </StoryContainer>
  ),
}
