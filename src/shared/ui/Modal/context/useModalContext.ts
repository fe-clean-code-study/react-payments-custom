import { useContext } from 'react';

import { ModalContext } from './ModalContext';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};

export default useModalContext;
