import { ComponentProps } from 'react';

import * as S from './Common.style';

export interface ContentProps extends ComponentProps<'div'> {}

const Body = ({ children, ...props }: ContentProps) => {
  return <S.Body {...props}>{children}</S.Body>;
};

export default Body;
