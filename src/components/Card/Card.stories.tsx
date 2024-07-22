import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'radio', options: ['sm', 'm', 'l'] } },
    cardInfo: {
      control: 'object',
      description: 'Card information',
      table: {
        type: {
          summary: 'object',
        },
        detail: {
          name: { control: 'text' },
          numbers: [
            { control: 'number' },
            { control: 'number' },
            { control: 'number' },
            { control: 'number' },
          ],
          ownerName: { control: 'text' },
          validMonth: { control: 'number' },
          validYear: { control: 'number' },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: {
      name: '포코카드',
      numbers: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      ownerName: 'SUN',
      validMonth: 12,
      validYear: 23,
    },
    size: 'm',
  },
};
