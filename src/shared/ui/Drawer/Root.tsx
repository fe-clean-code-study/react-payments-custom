import { PropsWithChildren } from 'react';

import { DrawerContextValue, DrawerProvider } from './context';

export interface RootProps extends DrawerContextValue {}

const Root = ({ children, ...contextProps }: PropsWithChildren<RootProps>) => {
  const { placement } = contextProps;
  return (
    <DrawerProvider
      {...contextProps}
      placement={placement ? placement : 'bottom'}
    >
      {contextProps.isOpen ? children : null}
    </DrawerProvider>
  );
};

export default Root;
