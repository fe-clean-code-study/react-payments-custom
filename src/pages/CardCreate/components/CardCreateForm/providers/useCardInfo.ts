import { useContext } from 'react';
import { CardInfoContext, CardInfoContextProps } from './CardInfoProvider';

export const useCardInfo = (): Pick<
  CardInfoContextProps,
  'setCardInfo' | 'cardInfo'
> => {
  const context = useContext(CardInfoContext);

  if (!context) {
    throw new Error('useCardInfo must be used within a CardInfoProvider');
  }

  return context;
};
