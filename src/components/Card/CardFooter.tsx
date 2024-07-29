import { PropsWithChildren } from 'react';

import * as S from './index.style';

interface ModalFooterProps extends PropsWithChildren {}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <S.CardFooter>{children}</S.CardFooter>;
};

export default ModalFooter;
