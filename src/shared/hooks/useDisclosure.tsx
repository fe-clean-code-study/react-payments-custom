import { useCallback, useState } from 'react';

interface UseDisclosureProps {
  initialOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const useDisclosure = (option?: UseDisclosureProps) => {
  const { initialOpen, onOpen, onClose } = option || {};
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpen && onOpen();
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose]);

  return { isOpen, open, close };
};

export default useDisclosure;
