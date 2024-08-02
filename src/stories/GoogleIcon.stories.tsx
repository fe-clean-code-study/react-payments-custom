import { ThemeProvider } from '@emotion/react';

import { GoogleIcon } from '~/components';
import { GoogleIconProps } from '~/components/GoogleIcon';
import { googleIcon } from '~/constants';
import theme from '~/styles/theme';

export default {
  title: 'components/GoogleIcon',
  component: GoogleIcon,
  argTypes: {
    name: {
      control: 'inline-radio',
      options: [...Object.keys(googleIcon)],
    },
  },
  args: {
    name: 'add',
  },
};

export const Default = (args: GoogleIconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GoogleIcon {...args} />
    </ThemeProvider>
  );
};
