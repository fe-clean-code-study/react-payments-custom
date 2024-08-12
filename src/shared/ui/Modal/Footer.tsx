import { ComponentProps, CSSProperties } from 'react';

import * as S from './Modal.style';

export interface FooterProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Footer = ({ style, children, ...props }: FooterProps) => {
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
