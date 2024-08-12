import { ComponentProps, CSSProperties } from 'react';

import * as S from './Button.style';

export interface LabelProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Label = ({ children, style, ...props }: LabelProps) => {
  return (
    <S.Label style={{ ...style }} {...props}>
      {children}
    </S.Label>
  );
};

export default Label;
