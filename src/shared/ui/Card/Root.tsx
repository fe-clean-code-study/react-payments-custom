import { ComponentProps, CSSProperties } from 'react';

import * as S from './Card.style';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ children, style, ...props }: RootProps) => {
  return (
    <S.Root
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Root>
  );
};

export default Root;
