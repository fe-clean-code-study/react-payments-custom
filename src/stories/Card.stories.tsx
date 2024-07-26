import { ThemeProvider } from '@emotion/react';
import theme from '~/styles/theme';
import { Card } from '~/components';
import { CardProps } from '~/components/Card';
import { cardCompany } from '~/constants';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    company: {
      control: 'inline-radio',
      options: [...Object.keys(cardCompany)],
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

export const Default = (args: CardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Card {...args} />
    </ThemeProvider>
  );
};
