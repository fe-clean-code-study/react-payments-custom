import { ComponentProps, CSSProperties } from 'react';

import { useDrawerContext } from './context';
import * as S from './Drawer.style';

export interface ContentProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Content = ({ style, children }: ContentProps) => {
  const { placement } = useDrawerContext();

  return (
    <S.Content
      placement={placement ?? 'bottom'}
      style={{
        ...style,
      }}
    >
      {children}
    </S.Content>
  );
};

export default Content;
