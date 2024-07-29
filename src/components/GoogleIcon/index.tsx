import { ComponentProps } from 'react';

import { googleIcon } from '~/constants';

interface GoogleIconProps extends ComponentProps<'span'> {
  name: keyof typeof googleIcon;
}

const GoogleIcon = ({ name }: GoogleIconProps) => {
  return <span className='material-symbols-outlined'>{googleIcon[name]}</span>;
};

export default GoogleIcon;
