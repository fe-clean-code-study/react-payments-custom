import { ComponentProps } from 'react';

import { useDrawerContext } from './context';
import * as S from './Drawer.style';

export interface OverlayProps extends ComponentProps<'div'> {}

const Overlay = ({ ...props }: OverlayProps) => {
  const { close, isOpen } = useDrawerContext();

  return isOpen && <S.Overlay onClick={close} {...props}></S.Overlay>;
};

export default Overlay;
