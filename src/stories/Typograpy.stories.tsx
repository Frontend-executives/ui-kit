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
      <Typography {...args} isUnderLine isUpperCase>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displayLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='displayLarge'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displayMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='displayMedium'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const displaySmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='displaySmall'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='headlineLarge'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='headlineMedium'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const headlineSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='headlineSmall'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='titleLarge'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='titleMedium'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const titleSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='titleSmall'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const bodyLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='bodyLarge'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const bodyMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='bodyMedium'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const bodySmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='bodySmall'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphLarge: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='paragraphLarge'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphMedium: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='paragraphMedium'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}

export const paragraphSmall: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='paragraphSmall'>
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

export const underline: Story = {
  render: (args) => (
    <StoryContainer>
      <Typography {...args} type='underline'>
        {typographyText}
      </Typography>
    </StoryContainer>
  ),
}
