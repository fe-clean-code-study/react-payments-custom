import { ComponentProps, CSSProperties } from 'react';

import * as S from './Field.style';

export interface LabelProps extends ComponentProps<'label'> {
  style?: CSSProperties;
}

const Label = ({ children, style, ...props }: LabelProps) => {
  return (
    <S.Label
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.Label>
  );
};

export default Label;
