import { useState } from "react";

const useModal = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useModal;
