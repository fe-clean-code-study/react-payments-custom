import { ComponentProps, CSSProperties } from 'react';

import * as S from './Keypad.style';

export interface ItemProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Item = ({ style, children, ...props }: ItemProps) => {
  return (
    <S.Item
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Item>
  );
};

export default Item;
