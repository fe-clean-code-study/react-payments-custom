import { PropsWithChildren } from 'react';

import * as S from './index.style';

interface CardBody extends PropsWithChildren {}

const CardBody = ({ children }: CardBody) => {
  return <S.CardBody>{children}</S.CardBody>;
};

export default CardBody;
