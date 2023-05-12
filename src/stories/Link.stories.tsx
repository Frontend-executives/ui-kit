import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '../components/Link'
import { StoryContainer } from '../components/StoryContainer'

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  title: 'Example/Link',
}

export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  render: (args) => <Link {...args} text='Primary' />,
}

export const External: Story = {
  render: (args) => <Link {...args} isExternal text='External' />,
}
export const Disabled: Story = {
  render: (args) => (
    <StoryContainer>
      <Link {...args} isDisabled text='Disabled' />
      <Link {...args} isDisabled isExternal text='External Disabled' />
    </StoryContainer>
  ),
}
