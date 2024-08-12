import { CARD_COMPANY } from '../../constants';

import { CreditCard, CreditCardProps } from './index';

export default {
  title: 'components/CreditCard',
  component: CreditCard,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'big'],
    },
    showChip: {
      control: 'boolean',
    },
    company: {
      control: 'inline-radio',
      options: [...Object.keys(CARD_COMPANY), 'NONE'],
    },
    numbers: {
      control: 'array',
    },
    expirationDate: {
      control: 'object',
    },
    cardUser: {
      control: 'text',
    },
  },
  args: {
    size: 'small',
    numbers: ['1234', '5678', '9101', '1121'],
    expirationDate: {
      month: '12',
      year: '23',
    },
    cardUser: 'John Doe',
  },
};

export const Default = (args: CreditCardProps) => {
  return <CreditCard {...args} />;
};
