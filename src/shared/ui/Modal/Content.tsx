import { ComponentProps, CSSProperties } from 'react';

import * as S from './Modal.style';

export interface ContentProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Content = ({ style, children, ...props }: ContentProps) => {
  return (
    <S.Content
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Content>
  );
};

export default Content;
