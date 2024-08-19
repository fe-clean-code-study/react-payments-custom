import { Field, InputProps } from './index';

export default {
  title: 'components/Field/Input',
  component: Field.Input,
  argTypes: {
    onlyNumber: { control: 'boolean' },
    onComplete: { action: 'onComplete' },
    style: { control: 'object' },
    props: { control: 'object' },
  },
  args: {
    onlyNumber: false,
    style: {
      width: '300px',
    },
    props: {
      maxLength: 6,
    },
  },
};

export const Input = ({ onComplete, style, ...args }: InputProps) => {
  const { props } = args as { props: InputProps };
  return (
    <Field.InputWrapper>
      <Field.Input style={style} onComplete={onComplete} {...props} />
    </Field.InputWrapper>
  );
};
