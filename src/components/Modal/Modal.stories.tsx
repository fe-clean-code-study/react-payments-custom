import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import { useState } from 'react';
import styled from 'styled-components';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    showModal: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalContents = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: black;
  font-size: 16px;
`;

const Template = (args: ModalProps) => {
  const [showModal, setShowModal] = useState(args.showModal);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        {...args}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      >
        <ModalContents>{args.children}</ModalContents>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    showModal: false,
    children: 'ModalContents',
  },
};
