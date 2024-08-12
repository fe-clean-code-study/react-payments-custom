import { ComponentProps, CSSProperties } from 'react';

import * as S from './Card.style';

export interface BodyProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Body = ({ children, style, ...props }: BodyProps) => {
  return (
    <S.Body style={{ ...style }} {...props}>
      {children}
    </S.Body>
  );
};

export default Body;
