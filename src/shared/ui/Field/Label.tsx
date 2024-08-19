import { ComponentProps } from 'react';

import * as S from './Field.style';

export interface LabelProps extends ComponentProps<'label'> {}

const Label = ({ children, ...props }: LabelProps) => {
  return <S.Label {...props}>{children}</S.Label>;
};

export default Label;
