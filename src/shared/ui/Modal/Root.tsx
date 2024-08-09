import { ComponentProps, PropsWithChildren } from 'react';

import { ModalProvider } from './context';

export interface RootProps extends ComponentProps<'div'> {
  isOpen: boolean;
  onClose: () => void;
}

const Root = ({ isOpen, onClose, children }: PropsWithChildren<RootProps>) => {
  return (
    <ModalProvider isOpen={isOpen} onClose={onClose}>
      {isOpen ? children : null}
    </ModalProvider>
  );
};

export default Root;
