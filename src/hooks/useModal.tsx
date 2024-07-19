import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return { isOpen, setIsOpen, close, open };
};

export default useModal;
