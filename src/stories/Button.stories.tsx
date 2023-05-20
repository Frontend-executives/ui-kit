import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button'
import Profile from '../components/icons/Profile'
import { StoryContainer } from '../components/StoryContainer'
import { ICON_SIZES } from '../utils/constants'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Example/Button',
}

export default meta
type Story = StoryObj<typeof Button>

const onClick = () => alert('button')

export const Primary: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} onClick={onClick} text='Primary' />
    </StoryContainer>
  ),
}

export const Rounded: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isRounded onClick={onClick} size='l' text='Rounded' />
      <Button {...args} isRounded onClick={onClick} size='m' text='Rounded' />
      <Button {...args} isRounded onClick={onClick} size='s' text='Rounded' />
      <Button {...args} isRounded onClick={onClick} size='xs' text='Rounded' />
    </StoryContainer>
  ),
}

export const DefaultButtons: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} onClick={onClick} text='Default Buttons' />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='success'
      />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='error'
      />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='warning'
      />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='black'
      />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='white'
      />
      <Button
        {...args}
        onClick={onClick}
        text='Default Buttons'
        theme='tertiary'
      />
    </StoryContainer>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='l'
        text='With Icon'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        text='With Icon'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='s'
        text='With Icon'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='xs'
        text='With Icon'
      />
    </StoryContainer>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <StoryContainer>
      <Button {...args} isDisabled onClick={onClick} size='l' text='Disabled' />
      <Button {...args} isDisabled onClick={onClick} text='Disabled' />
      <Button {...args} isDisabled onClick={onClick} size='s' text='Disabled' />
      <Button
        {...args}
        isDisabled
        onClick={onClick}
        size='xs'
        text='Disabled'
      />
    </StoryContainer>
  ),
}

export const WithLoadingStatus: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        isLoading
        onClick={onClick}
        size='l'
        text='With Loading Status'
      />
      <Button
        {...args}
        isLoading
        onClick={onClick}
        text='With Loading Status'
      />
      <Button
        {...args}
        isLoading
        onClick={onClick}
        size='s'
        text='With Loading Status'
      />
      <Button
        {...args}
        isLoading
        onClick={onClick}
        size='xs'
        text='With Loading Status'
      />
    </StoryContainer>
  ),
}

export const IconWithoutText: Story = {
  render: (args) => (
    <StoryContainer>
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='l'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        isRounded
        onClick={onClick}
        size='l'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        isRounded
        onClick={onClick}
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='s'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        isRounded
        onClick={onClick}
        size='s'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        onClick={onClick}
        size='xs'
      />
      <Button
        {...args}
        icon={<Profile height={ICON_SIZES.m} width={ICON_SIZES.m} />}
        isRounded
        onClick={onClick}
        size='xs'
      />
    </StoryContainer>
  ),
}
