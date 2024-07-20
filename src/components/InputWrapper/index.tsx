import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface InputWrapperProps extends PropsWithChildren {
  type?: 'fill' | 'flushed';
}

const InputWrapper = ({ type = 'fill', children }: InputWrapperProps) => {
  return <S.Container type={type}>{children}</S.Container>;
};

export default InputWrapper;
