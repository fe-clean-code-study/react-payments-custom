import { ThemeProvider } from '@emotion/react';

import { CompanySelection } from '~/components';
import { CompanySelectionProps } from '~/components/CompanySelection';
import theme from '~/styles/theme';

export default {
  title: 'components/CompanySelection',
  component: CompanySelection,
};

export const Default = (args: CompanySelectionProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CompanySelection {...args} />
    </ThemeProvider>
  );
};
