import { ComponentProps } from 'react';

import * as S from './Button.style';

export interface LabelProps extends ComponentProps<'div'> {}

const Label = ({ children, ...props }: LabelProps) => {
  return <S.Label {...props}>{children}</S.Label>;
};

export default Label;
