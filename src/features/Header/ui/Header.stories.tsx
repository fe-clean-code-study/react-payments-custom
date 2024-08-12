import { Header, HeaderProps } from '.';

export default {
  title: 'features/Header',
  component: Header,
};

export const Root = (args: HeaderProps) => {
  return <Header {...args}>Hello World!</Header>;
};
