import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../components/Typography'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Example/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Title: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    element: 'h1',
  },
}

export const Subtitle: Story = {
  args: {
    children:
      'Donec nunc risus, tristique ac justo eu, congue cursus magna. In hac habitasse platea dictumst. Morbi ac placerat leo.',
    element: 'h2',
  },
}

export const Text: Story = {
  args: {
    children:
      'Sed malesuada eu lacus venenatis porta. Curabitur vitae rhoncus massa. Vivamus venenatis tortor at turpis finibus, id vestibulum risus porttitor. Nullam semper laoreet enim non blandit. Pellentesque sollicitudin malesuada purus, pharetra consectetur sapien vestibulum eget.',
  },
}
