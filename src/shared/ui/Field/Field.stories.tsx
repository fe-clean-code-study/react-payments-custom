import { Field } from './index';
import { RootProps } from './index';

export default {
  title: 'components/Field',
  component: Field,
};
export const Root = (args: RootProps) => {
  return (
    <Field.Root {...args}>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.ErrorText>Error</Field.ErrorText>
    </Field.Root>
  );
};
