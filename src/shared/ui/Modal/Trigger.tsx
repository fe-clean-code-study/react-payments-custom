import { ComponentProps } from 'react';

import { useModalContext } from './context';

export interface TriggerProps extends ComponentProps<'div'> {}

const Trigger = ({ children }: TriggerProps) => {
  const { open } = useModalContext();

  return <div onClick={open}>{children}</div>;
};

export default Trigger;
