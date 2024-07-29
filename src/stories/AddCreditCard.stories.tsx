import { ThemeProvider } from '@emotion/react';

import AddCreditCard from '~/components/AddCreditCard';
import { AddCreditCardProps } from '~/components/AddCreditCard';
import theme from '~/styles/theme';

export default {
  title: 'components/AddCreditCard',
  component: AddCreditCard,
};

export const Default = (args: AddCreditCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AddCreditCard {...args} />
    </ThemeProvider>
  );
};
