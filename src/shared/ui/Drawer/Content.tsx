import { ComponentProps } from 'react';

import { useDrawerContext } from './context';
import * as S from './Drawer.style';

export interface ContentProps extends ComponentProps<'div'> {}

const Content = ({ children }: ContentProps) => {
  const { placement, isOpen } = useDrawerContext();

  return (
    isOpen && (
      <S.Content placement={placement ?? 'bottom'}>{children}</S.Content>
    )
  );
};

export default Content;
