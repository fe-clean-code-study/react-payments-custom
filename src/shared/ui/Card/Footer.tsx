import { ComponentProps, CSSProperties } from 'react';

import * as S from './Card.style';

export interface FooterProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Footer = ({ children, style, ...props }: FooterProps) => {
  return (
    <S.Footer
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Footer>
  );
};

export default Footer;
