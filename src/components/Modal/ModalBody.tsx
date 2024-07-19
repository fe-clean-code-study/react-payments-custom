import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface ModalBodyProps extends PropsWithChildren {}

const ModalBody = ({ children }: ModalBodyProps) => {
  return <S.ModalBody>{children}</S.ModalBody>;
};

export default ModalBody;
