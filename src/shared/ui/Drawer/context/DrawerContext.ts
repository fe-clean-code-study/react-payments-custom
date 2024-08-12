import { createContext } from 'react';

export interface DrawerContextValue {
  isOpen: boolean;
  onClose: () => void;
  placement?: 'top' | 'right' | 'bottom' | 'left';
}

export const DrawerContext = createContext<DrawerContextValue | undefined>(
  undefined,
);
