import { googleIcon } from '../constants';
import { useDisclosure } from '../hooks';

export type GoogleIconName = keyof typeof googleIcon;

export interface DisclosureContextProps {
  initialOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closeDisabled?: boolean;
}

export interface DisclosureContextValue
  extends ReturnType<typeof useDisclosure> {}

export type Placement = 'top' | 'right' | 'bottom' | 'left';
