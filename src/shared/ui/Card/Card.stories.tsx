import { Card } from './index';
import { RootProps } from './index';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    style: { control: 'object' },
    props: { control: 'object' },
  },
};

export const Root = (args: RootProps) => {
  return (
    <Card.Root {...args}>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  );
};
