import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './index.style';

interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'fill' | 'flushed';
  isInvalidation?: boolean;
}

const InputWrapper: React.FC<PropsWithChildren<InputWrapperProps>> = ({
  type = 'fill',
  isInvalidation = false,
  children,
  ...props
}) => {
  return (
    <S.Container isInvalidation={isInvalidation} type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default InputWrapper;