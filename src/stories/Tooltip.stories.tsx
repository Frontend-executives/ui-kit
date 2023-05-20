import type { Meta, StoryObj } from '@storybook/react'

import IconProfile from '../components/icons/Profile'
import { StoryContainer } from '../components/StoryContainer'
import { Tooltip } from '../components/Tooltip'
import { ICON_SIZES } from '../utils/constants'

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
        <IconProfile height={ICON_SIZES.m} width={ICON_SIZES.m} />
      </Tooltip>
      <Tooltip {...args} text={'Lorem.'} variant='error'>
        <IconProfile height={ICON_SIZES.m} width={ICON_SIZES.m} />
      </Tooltip>
      <Tooltip
        {...args}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet architecto'
        }
      >
        <IconProfile height={ICON_SIZES.m} width={ICON_SIZES.m} />
      </Tooltip>
    </StoryContainer>
  ),
}
