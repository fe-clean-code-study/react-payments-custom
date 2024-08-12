import { ComponentProps, CSSProperties } from 'react';

import * as S from './Box.style';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style, children, ...props }: RootProps) => {
  return (
    <S.Root style={{ ...style }} {...props}>
      {children}
    </S.Root>
  );
};

export default Root;
