import { ComponentProps } from 'react';

import * as S from './Keypad.style';

export interface RootProps extends ComponentProps<'div'> {
  row?: number;
  col?: number;
}

const Root = ({ row, col, children, ...props }: RootProps) => {
  return (
    <S.Root row={row} col={col} {...props}>
      {children}
    </S.Root>
  );
};

export default Root;
