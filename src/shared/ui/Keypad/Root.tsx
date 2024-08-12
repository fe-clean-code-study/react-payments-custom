import { ComponentProps, CSSProperties } from 'react';

import * as S from './Keypad.style';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
  row?: number;
  col?: number;
}

const Root = ({ style, row, col, children, ...props }: RootProps) => {
  return (
    <S.Root
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Root>
  );
};

export default Root;
