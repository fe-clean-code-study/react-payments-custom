import { Box, BoxProps } from './index';

export default {
  title: 'components/Box',
  component: Box,
  argTypes: {
    style: {
      control: 'object',
    },
    props: {
      control: 'object',
    },
  },
  args: {
    style: {
      width: '100px',
      height: '100px',
      backgroundColor: '#eee',
    },
  },
};

export const Default = ({ ...props }: BoxProps) => {
  return <Box {...props} />;
};
