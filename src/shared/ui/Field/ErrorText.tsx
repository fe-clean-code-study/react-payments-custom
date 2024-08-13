import { ComponentProps, CSSProperties } from 'react';

import * as S from './Field.style';

export interface ErrorTextProps extends ComponentProps<'p'> {
  style?: CSSProperties;
  isShow?: boolean;
}

const ErrorText = ({
  style,
  isShow = false,
  children,
  ...props
}: ErrorTextProps) => {
  return (
    isShow && (
      <S.ErrorText
        style={{
          ...style,
        }}
        {...props}
      >
        {children}
      </S.ErrorText>
    )
  );
};

export default ErrorText;
