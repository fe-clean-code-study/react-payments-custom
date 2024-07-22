import { Meta, StoryObj } from '@storybook/react';
import ArrowButton from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  title: 'Components/ArrowButton',
  component: ArrowButton,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['left', 'right', 'up', 'down'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'right',
  },
};
