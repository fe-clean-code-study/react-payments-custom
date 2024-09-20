import { Keypad, RootProps } from './index';

export default {
  title: 'components/Keypad',
  component: Keypad.Root,
  argTypes: {
    row: {
      control: {
        type: 'number',
      },
    },
    col: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    row: 4,
    col: 3,
  },
};

export const Default = ({ row, col, ...props }: RootProps) => {
  return (
    <Keypad.Root row={row} col={col} {...props}>
      <Keypad.Item>1</Keypad.Item>
      <Keypad.Item>2</Keypad.Item>
      <Keypad.Item>3</Keypad.Item>
      <Keypad.Item>4</Keypad.Item>
      <Keypad.Item>5</Keypad.Item>
      <Keypad.Item>6</Keypad.Item>
      <Keypad.Item>7</Keypad.Item>
      <Keypad.Item>8</Keypad.Item>
      <Keypad.Item>9</Keypad.Item>
      <Keypad.Item>0</Keypad.Item>
    </Keypad.Root>
  );
};
