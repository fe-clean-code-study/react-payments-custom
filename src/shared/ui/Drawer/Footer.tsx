import { ComponentProps } from 'react';

import * as S from './Drawer.style';

export interface FooterProps extends ComponentProps<'div'> {}

const Footer = ({ children, ...props }: FooterProps) => {
  return <S.Footer {...props}>{children}</S.Footer>;
};

export default Footer;
