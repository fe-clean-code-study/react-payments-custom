import { Meta, StoryObj } from '@storybook/react';
import CardCreate from './CardCreate';

const meta: Meta<typeof CardCreate> = {
  title: 'Pages/CardCreate',
  component: CardCreate,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
