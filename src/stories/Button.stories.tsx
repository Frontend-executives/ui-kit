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
  render: (args) => (
    <StoryContainer>
      <Button {...args} text='Primary' />
    </StoryContainer>
  ),
}

export const Rounded: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isRounded size='l' text='Rounded' />
      <Button {...args} isRounded size='m' text='Rounded' />
      <Button {...args} isRounded size='s' text='Rounded' />
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
      <Button {...args} text='Default Buttons' theme='black' />
      <Button {...args} text='Default Buttons' theme='white' />
      <Button {...args} text='Default Buttons' theme='tertiary' />
    </StoryContainer>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='l'
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
        size='s'
        text='With Icon'
      />
    </StoryContainer>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isDisabled size='l' text='Disabled' />
      <Button {...args} isDisabled text='Disabled' />
      <Button {...args} isDisabled size='s' text='Disabled' />
    </StoryContainer>
  ),
}

export const WithLoadingStatus: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isLoading size='l' text='With Loading Status' />
      <Button {...args} isLoading text='With Loading Status' />
      <Button {...args} isLoading size='s' text='With Loading Status' />
    </StoryContainer>
  ),
}

export const IconWithoutText: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        size='l'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        isRounded
        size='l'
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
        size='s'
      />
      <Button
        {...args}
        icon={<Profile height={IconSize.M} width={IconSize.M} />}
        isRounded
        size='s'
      />
    </StoryContainer>
  ),
}
