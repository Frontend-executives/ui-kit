import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '../components/Modal'
import { StoryContainer } from '../components/StoryContainer'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Example/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

const blankFunction = () => alert('Modal closed')
export const DefaultModal: Story = {
  render: (args) => (
    <StoryContainer>
      <Modal {...args} heading='Modal heading' isOpen onClose={blankFunction}>
        This is a modal
      </Modal>
    </StoryContainer>
  ),
}
