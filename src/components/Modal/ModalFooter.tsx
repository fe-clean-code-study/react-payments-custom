import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface ModalFooterProps extends PropsWithChildren {}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <S.ModalFooter>{children}</S.ModalFooter>;
};

export default ModalFooter;
