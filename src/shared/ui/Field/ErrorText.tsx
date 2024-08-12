import { ComponentProps, CSSProperties } from 'react';

import * as S from './Field.style';

export interface ErrorTextProps extends ComponentProps<'p'> {
  style?: CSSProperties;
}

const ErrorText = ({ style, children, ...props }: ErrorTextProps) => {
  return (
    <S.ErrorText
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </S.ErrorText>
  );
};

export default ErrorText;
