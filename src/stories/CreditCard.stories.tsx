import { ThemeProvider } from '@emotion/react';

import { CreditCard } from '~/components';
import { CreditCardProps } from '~/components/CreditCard';
import { cardCompany } from '~/constants';
import theme from '~/styles/theme';

export default {
  title: 'components/CreditCard',
  component: CreditCard,
  argTypes: {
    company: {
      control: 'inline-radio',
      options: [...Object.keys(cardCompany), undefined],
    },
    numbers: {
      control: {
        type: 'array',
      },
    },
    endDate: {
      control: 'object',
    },
    cardUser: {
      control: 'text',
    },
  },
  args: {
    size: 'small',
    company: 'suyeon',
    numbers: ['1234', '5678', '9101', '1121'],
    endDate: {
      month: '12',
      day: '21',
    },
    cardUser: '수연',
  },
};

export const Default = (args: CreditCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CreditCard {...args} />
    </ThemeProvider>
  );
};
