import { PropsWithChildren } from 'react';

import * as S from './index.style';

export interface CardProps extends PropsWithChildren {}

const Card = ({ children }: CardProps) => {
  return <S.Card>{children}</S.Card>;
};

export default Card;
export { default as CardHeader } from './CardHeader';
export { default as CardBody } from './CardBody';
export { default as CardFooter } from './CardFooter';
