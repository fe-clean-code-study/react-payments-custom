import { ComponentProps } from 'react';

import { useDrawerContext } from './context';

export interface TriggerProps extends ComponentProps<'div'> {}

const Trigger = ({ children }: TriggerProps) => {
  const { open } = useDrawerContext();

  return <div onClick={open}>{children}</div>;
};

export default Trigger;
