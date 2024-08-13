import { ComponentProps, CSSProperties } from 'react';

import * as S from './Field.style';

export interface InputWrapperProps extends ComponentProps<'div'> {
  style?: CSSProperties;
  styleType?: 'fill' | 'outline' | 'flushed' | 'ghost';
}

const InputWrapper = ({
  style,
  styleType = 'fill',
  children,
  ...props
}: InputWrapperProps) => {
  return (
    <S.InputWrapper styleType={styleType} style={style} {...props}>
      {children}
    </S.InputWrapper>
  );
};

export default InputWrapper;
