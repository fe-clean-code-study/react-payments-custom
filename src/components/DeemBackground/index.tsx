import { MouseEvent, PropsWithChildren } from 'react';

import * as S from './index.style';

interface DeemBackgroundProps {
  onClose?: () => void;
}

const DeemBackground: React.FC<PropsWithChildren<DeemBackgroundProps>> = ({
  children,
  onClose,
}) => {
  const handleClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    onClose && onClose();
  };

  return (
    <S.DeemBackgroundContainer
      onClick={handleClickBackground}
      className='deem-background'
    >
      {children}
    </S.DeemBackgroundContainer>
  );
};

export default DeemBackground;
