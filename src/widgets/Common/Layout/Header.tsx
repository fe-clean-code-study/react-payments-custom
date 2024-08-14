import { ComponentProps } from 'react';

import * as S from './Layout.style';

export interface HeaderProps extends ComponentProps<'div'> {}

const Header = ({ children, ...props }: HeaderProps) => {
  return <S.Header {...props}>{children}</S.Header>;
};

export default Header;