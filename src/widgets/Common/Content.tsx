import { ComponentProps } from 'react';

import * as S from './Common.style';

export interface ContentProps extends ComponentProps<'div'> {}

const Content = ({ children, ...props }: ContentProps) => {
  return <S.Content {...props}>{children}</S.Content>;
};

export default Content;
