import { ThemeProvider } from '@emotion/react';
import theme from '~/styles/theme';
import { InputWrapper } from '~/components';
import { InputWrapperProps } from '~/components/InputWrapper';

export default {
  title: 'components/InputWrapper',
  component: InputWrapper,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['flushed', 'fill'],
    },
    isInvalidation: {
      control: 'boolean',
    },
  },
};

export const Defailt = (args: InputWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <InputWrapper {...args} />
    </ThemeProvider>
  );
};
