import { ComponentProps } from 'react';

import { useDrawerContext } from './context';
import * as S from './Drawer.style';

export interface CloseButtonProps extends ComponentProps<'button'> {}

const CloseButton = ({ children }: CloseButtonProps) => {
  const { close } = useDrawerContext();

  return <S.CloseButton onClick={close}>{children}</S.CloseButton>;
};

export default CloseButton;
