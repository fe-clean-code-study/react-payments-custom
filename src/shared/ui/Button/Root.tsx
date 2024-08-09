import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

import * as S from './Button.style';

export interface RootProps extends ComponentProps<'button'> {
  style?: CSSProperties;
}

const Root = ({ children, style, ...props }: PropsWithChildren<RootProps>) => {
  return (
    <S.Button
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Root;
