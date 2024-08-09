import { Button } from './index';
import { RootProps } from './index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    style: { control: 'object' },
    props: { control: 'object' },
  },
};

export const Root = (args: RootProps) => {
  return (
    <Button.Root {...args}>
      <Button.Label>Button</Button.Label>
    </Button.Root>
  );
};
