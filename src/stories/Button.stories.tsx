import { ThemeProvider } from '@emotion/react';

import { Button } from '~/components';
import { ButtonProps } from '~/components/Button';
import theme from '~/styles/theme';

export default {
  title: 'components/Button',
  component: Button,
};

export const Default = (args: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>test</Button>
    </ThemeProvider>
  );
};
