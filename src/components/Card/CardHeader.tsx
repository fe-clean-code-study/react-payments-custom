import { PropsWithChildren } from 'react';

import * as S from './index.style';

export interface CardHeaderProps extends PropsWithChildren {}

const CardHeader = ({ children }: CardHeaderProps) => {
  return <S.CardHeader>{children}</S.CardHeader>;
};

export default CardHeader;
