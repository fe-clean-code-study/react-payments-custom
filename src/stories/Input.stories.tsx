import { ThemeProvider } from '@emotion/react';
import theme from '~/styles/theme';
import { Input } from '~/components';
import { InputProps } from '~/components/Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'password'],
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onlyNumber: {
      control: 'boolean',
    },
    textAlign: {
      control: 'inline-radio',
      options: ['left', 'center'],
    },
  },
  args: {
    type: 'text',
    placeholder: 'placeholder',
    value: '',
    onChange: () => {},
  },
};

export const Defailt = (args: InputProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Input {...args} />
    </ThemeProvider>
  );
};
