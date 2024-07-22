import { useState } from 'react';

const useModal = (initialOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return { isOpen, setIsOpen, close, open };
};

export default useModal;
