import { ComponentProps } from 'react';

import * as S from './Button.style';

export interface RootProps extends ComponentProps<'button'> {}

const Root = ({ children, ...props }: RootProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Root;
