import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './index.style';

interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'fill' | 'flushed';
}

const InputWrapper: React.FC<PropsWithChildren<InputWrapperProps>> = ({
  type = 'fill',
  children,
  ...props
}) => {
  return (
    <S.Container type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default InputWrapper;
