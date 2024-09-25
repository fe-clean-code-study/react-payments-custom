import { ComponentProps } from 'react';

import * as S from './Card.style';

export interface BodyProps extends ComponentProps<'div'> {}

const Body = ({ children, ...props }: BodyProps) => {
  return <S.Body {...props}>{children}</S.Body>;
};

export default Body;
