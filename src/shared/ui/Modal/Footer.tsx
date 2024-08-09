import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

import * as S from './Modal.style';

export interface FooterProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Footer = ({
  style,
  children,
  ...props
}: PropsWithChildren<FooterProps>) => {
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
