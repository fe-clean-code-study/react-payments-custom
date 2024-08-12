import { CSSProperties, ComponentProps } from 'react';

import * as S from './Card.style';

export interface HeaderProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Header = ({ children, style, ...props }: HeaderProps) => {
  return (
    <S.Header
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Header>
  );
};

export default Header;
