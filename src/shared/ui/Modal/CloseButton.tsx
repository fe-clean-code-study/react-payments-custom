import { ComponentProps } from 'react';

import { useModalContext } from './context';
import * as S from './Modal.style';

export interface CloseButtonProps extends ComponentProps<'button'> {}

const CloseButton = ({ children }: CloseButtonProps) => {
  const { close } = useModalContext();

  return <S.CloseButton onClick={close}>{children}</S.CloseButton>;
};

export default CloseButton;
