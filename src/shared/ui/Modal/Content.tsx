import { ComponentProps } from 'react';

import { useModalContext } from './context';
import * as S from './Modal.style';

export interface ContentProps extends ComponentProps<'div'> {}

const Content = ({ children, ...props }: ContentProps) => {
  const { isOpen } = useModalContext();

  return isOpen && <S.Content {...props}>{children}</S.Content>;
};

export default Content;
