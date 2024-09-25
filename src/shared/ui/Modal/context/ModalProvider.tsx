import { PropsWithChildren } from 'react';

import { ModalContext } from './ModalContext';

import { useDisclosure } from '~/shared/hooks';
import { DisclosureContextProps } from '~/shared/types/ui';

const ModalProvider = ({
  initialOpen,
  onClose,
  onOpen,
  closeDisabled = false,
  children,
}: DisclosureContextProps & PropsWithChildren) => {
  const disclosure = useDisclosure({ initialOpen, onClose, onOpen });

  return (
    <ModalContext.Provider value={{ ...disclosure, closeDisabled }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
