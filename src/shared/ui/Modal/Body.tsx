import { ComponentProps, CSSProperties } from 'react';

import * as S from './Modal.style';

export interface BodyProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Body = ({ style, children, ...props }: BodyProps) => {
  return (
    <S.Body
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Body>
  );
};

export default Body;
