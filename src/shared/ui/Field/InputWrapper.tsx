import { ComponentProps } from 'react';

import * as S from './Field.style';

export interface InputWrapperProps extends ComponentProps<'div'> {
  styleType?: 'fill' | 'outline' | 'flushed' | 'ghost';
}

const InputWrapper = ({
  styleType = 'fill',
  children,
  ...props
}: InputWrapperProps) => {
  return (
    <S.InputWrapper styleType={styleType} {...props}>
      {children}
    </S.InputWrapper>
  );
};

export default InputWrapper;
