import { ComponentProps } from 'react';

import * as S from './Card.style';

export interface RootProps extends ComponentProps<'div'> {}

const Root = ({ children, ...props }: RootProps) => {
  return <S.Root {...props}>{children}</S.Root>;
};

export default Root;
