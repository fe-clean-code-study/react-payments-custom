import { ThemeProvider } from '@emotion/react';

import { DeemBackground } from '~/components';
import { DeemBackgroundProps } from '~/components/DeemBackground';
import theme from '~/styles/theme';

export default {
  title: 'components/DeemBackground',
  component: DeemBackground,
};

export const Default = (args: DeemBackgroundProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DeemBackground {...args} />
    </ThemeProvider>
  );
};
