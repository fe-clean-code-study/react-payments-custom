import { Field, RootProps } from './index';

export default {
  title: 'components/Field',
  component: Field,
};

export const Default = (args: RootProps) => {
  return (
    <Field.Root {...args}>
      <Field.Label htmlFor='storybook-input'>Label</Field.Label>
      <Field.Input id='storybook-input' placeholder='' />
      <Field.ErrorText>Error</Field.ErrorText>
    </Field.Root>
  );
};
