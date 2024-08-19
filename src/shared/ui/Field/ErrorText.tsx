import { ComponentProps } from 'react';

import * as S from './Field.style';

export interface ErrorTextProps extends ComponentProps<'p'> {
  isShow?: boolean;
}

const ErrorText = ({ isShow = false, children, ...props }: ErrorTextProps) => {
  return isShow && <S.ErrorText {...props}>{children}</S.ErrorText>;
};

export default ErrorText;
