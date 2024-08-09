import { createContext } from 'react';

export interface ModalContextValue {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined,
);
