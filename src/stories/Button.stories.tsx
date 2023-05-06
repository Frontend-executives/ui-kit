import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button'
import Profile from '../components/icons/Profile'
import { StoryContainer } from '../components/StoryContainer'
import { IconSize } from '../types/types'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Example/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => <Button {...args} text='Primary' />,
}

export const Rounded: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isRounded size='L' text='Rounded' />
      <Button {...args} isRounded size='M' text='Rounded' />
      <Button {...args} isRounded size='S' text='Rounded' />
    </StoryContainer>
  ),
}

export const DefaultButtons: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} text='Default Buttons' />
      <Button {...args} text='Default Buttons' theme='success' />
      <Button {...args} text='Default Buttons' theme='failed' />
      <Button {...args} text='Default Buttons' theme='warning' />
    </StoryContainer>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='L'
        text='With Icon'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        text='With Icon'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='S'
        text='With Icon'
      />
    </StoryContainer>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isDisabled size='L' text='Disabled' />
      <Button {...args} isDisabled text='Disabled' />
      <Button {...args} isDisabled size='S' text='Disabled' />
    </StoryContainer>
  ),
}

export const WithLoadingStatus: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isLoading size='L' text='With Loading Status' />
      <Button {...args} isLoading text='With Loading Status' />
      <Button {...args} isLoading size='S' text='With Loading Status' />
    </StoryContainer>
  ),
}

export const IconWithoutText: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='L'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        isRounded
        size='L'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        isRounded
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='S'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        isRounded
        size='S'
      />
    </StoryContainer>
  ),
}
