import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../components/StoryContainer'
import { Typography } from '../components/Typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Example/Typography',
}

export default meta
type Story = StoryObj<typeof Typography>

const typographyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`

export const defaultTypography: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} isUnderline isUppercase>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displayLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='L' type='display'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displayMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='M' type='display'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displaySmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='S' type='display'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='L' type='headline'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='M' type='headline'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='S' type='headline'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='L' type='title'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='M' type='title'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='S' type='title'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='L' type='paragraph'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='M' type='paragraph'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} size='S' type='paragraph'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const button: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='button'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const caption: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='caption'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}
