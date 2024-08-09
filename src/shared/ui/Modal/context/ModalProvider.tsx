import { PropsWithChildren } from 'react';

import { ModalContext, ModalContextValue } from './ModalContext';

const ModalProvider = ({
  isOpen,
  onClose,
  children,
}: ModalContextValue & PropsWithChildren) => {
  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
