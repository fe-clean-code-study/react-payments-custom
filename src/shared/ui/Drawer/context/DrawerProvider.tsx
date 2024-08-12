import { PropsWithChildren } from 'react';

import { DrawerContext, DrawerContextValue } from './DrawerContext';

const DrawerProvider = ({
  children,
  ...drawerProps
}: DrawerContextValue & PropsWithChildren) => {
  return (
    <DrawerContext.Provider value={{ ...drawerProps }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
