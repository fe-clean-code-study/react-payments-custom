import { PropsWithChildren } from 'react';

import { DrawerContext } from './DrawerContext';

import { useDisclosure } from '~/shared/hooks';
import { DisclosureContextProps, Placement } from '~/shared/types/ui';

const DrawerProvider = ({
  children,
  placement = 'bottom',
  ...drawerProps
}: DisclosureContextProps & PropsWithChildren & { placement?: Placement }) => {
  const disclosre = useDisclosure(drawerProps);

  return (
    <DrawerContext.Provider value={{ ...disclosre, placement }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
