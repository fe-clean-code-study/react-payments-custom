import { PropsWithChildren } from 'react';

import { ModalContextValue, ModalProvider } from './context';

export interface RootProps extends ModalContextValue {}

const Root = ({ isOpen, onClose, children }: PropsWithChildren<RootProps>) => {
  return (
    <ModalProvider isOpen={isOpen} onClose={onClose}>
      {isOpen ? children : null}
    </ModalProvider>
  );
};

export default Root;
