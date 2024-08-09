import { useState } from 'react';

const useDisclosure = (initialOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, onOpen, onClose };
};

export default useDisclosure;
