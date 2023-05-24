import type {Meta, StoryObj} from '@storybook/react'

import {Accordion} from '../components/Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
  title: 'Example/Accordion',
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => <Accordion {...args} caption='How to make Matthew move to the city and not to live in Kaskelen?'
                               text={'Encouraging someone to move to a specific location is a personal decision that depends on various factors, including individual preferences, opportunities, and circumstances. Remember that ultimately, the decision to move to a particular location rests with Matthew. It\'s essential to have open and honest conversations, listen to his concerns and priorities, and understand his unique circumstances. Respect his choices and provide support regardless of the decision he makes.'}/>,
}

export const Disabled: Story = {
  render: (args) => <Accordion {...args} caption='How to make Matthew move to the city and not to live in Kaskelen?'
                               isDisabled
                               text={'Encouraging someone to move to a specific location is a personal decision that depends on various factors, including individual preferences, opportunities, and circumstances. Remember that ultimately, the decision to move to a particular location rests with Matthew. It\'s essential to have open and honest conversations, listen to his concerns and priorities, and understand his unique circumstances. Respect his choices and provide support regardless of the decision he makes.'}/>,
}
