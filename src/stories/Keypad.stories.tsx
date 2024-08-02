import { ThemeProvider } from '@emotion/react';

import { Keypad } from '~/components';
import { KeypadProps } from '~/components';
import theme from '~/styles/theme';

export default {
  title: 'components/Keypad',
  component: Keypad,
  argTypes: {
    numbers: {
      type: 'array',
    },
  },
  args: {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  },
};

export const Default = (args: KeypadProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Keypad {...args} />
    </ThemeProvider>
  );
};
