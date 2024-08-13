import { CardUserField, CardUserFieldProps } from '.';

export default {
  title: 'features/CardUserField',
  component: CardUserField,
  argTypes: {
    isError: {
      control: 'boolean',
    },
  },
  args: {
    isError: false,
  },
};

export const Default = (args: CardUserFieldProps) => {
  return <CardUserField {...args} />;
};
