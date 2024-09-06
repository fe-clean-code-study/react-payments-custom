import { useState } from 'react';

interface UseDisclosureProps {
  initialOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const useDisclosure = (option?: UseDisclosureProps) => {
  const { initialOpen, onOpen, onClose } = option || {};
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const open = () => {
    setIsOpen(true);
    onOpen && onOpen();
  };

  const close = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return { isOpen, open, close };
};

export default useDisclosure;
