import { Button } from './index';
import { RootProps } from './index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    style: { control: 'object' },
    props: { control: 'object' },
  },
  args: {
    children: 'Button',
    style: { backgroundColor: 'blue', color: 'white' },
  },
};

export const Root = (args: RootProps) => {
  return (
    <Button.Root {...args}>
      <Button.Label>{args.children}</Button.Label>
    </Button.Root>
  );
};
