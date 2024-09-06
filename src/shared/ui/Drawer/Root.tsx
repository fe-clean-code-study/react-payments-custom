import { PropsWithChildren } from 'react';

import { DrawerProvider } from './context';

import { DisclosureContextProps, Placement } from '~/shared/types/ui';

export interface RootProps extends DisclosureContextProps {
  placement?: Placement;
}

const Root = ({ children, ...contextProps }: PropsWithChildren<RootProps>) => {
  return <DrawerProvider {...contextProps}>{children}</DrawerProvider>;
};

export default Root;
