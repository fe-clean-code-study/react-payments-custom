import { createContext } from 'react';

import { useDisclosure } from '~/shared/hooks';
import { Placement } from '~/shared/types/ui';

export interface DrawerContextValue extends ReturnType<typeof useDisclosure> {
  placement: Placement;
}

export const DrawerContext = createContext<DrawerContextValue | undefined>(
  undefined,
);
