import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button'
import Loader from '../components/icons/Loader'
import Profile from '../components/icons/Profile'
import { IconSize } from '../types/types'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Example/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => <Button {...args}>Профиль</Button>,
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<Profile height={IconSize.M} width={IconSize.M} />}>
      Профиль
    </Button>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Button {...args} isDisabled>
      Профиль
    </Button>
  ),
}

export const WithLoadingStatus: Story = {
  render: (args) => (
    <Button {...args} isLoading>
      Профиль
    </Button>
  ),
}

export const IconWithoutText: Story = {
  render: (args) => (
    <Button
      {...args}
      icon={<Loader height={IconSize.M} width={IconSize.M} />}
    />
  ),
}
