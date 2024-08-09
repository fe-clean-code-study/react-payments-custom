import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

import * as S from './Modal.style';

export interface ContentProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Content = ({
  style,
  children,
  ...props
}: PropsWithChildren<ContentProps>) => {
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
