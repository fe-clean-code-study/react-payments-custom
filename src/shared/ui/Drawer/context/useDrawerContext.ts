import { useContext } from 'react';

import { DrawerContext } from './DrawerContext';

const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }

  return context;
};

export default useDrawerContext;
