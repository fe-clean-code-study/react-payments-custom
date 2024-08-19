import { ComponentProps } from 'react';

import * as S from './Keypad.style';

export interface ItemProps extends ComponentProps<'div'> {}

const Item = ({ children, ...props }: ItemProps) => {
  return <S.Item {...props}>{children}</S.Item>;
};

export default Item;
