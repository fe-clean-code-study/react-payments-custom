import { GoogleIcon, GoogleIconProps } from './index';

import { googleIcon } from '~/shared/constants';

export default {
  title: 'components/GoogleIcon',
  component: GoogleIcon,
  argTypes: {
    name: {
      control: 'inline-radio',
      options: [...Object.values(googleIcon)],
    },
  },
  args: {
    name: 'arrow_back',
  },
};

export const Root = (args: GoogleIconProps) => {
  return <GoogleIcon {...args} />;
};
