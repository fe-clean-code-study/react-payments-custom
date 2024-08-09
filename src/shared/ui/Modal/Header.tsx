import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

import * as S from './Modal.style';

export interface HeaderProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Header = ({
  style,
  children,
  ...props
}: PropsWithChildren<HeaderProps>) => {
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
