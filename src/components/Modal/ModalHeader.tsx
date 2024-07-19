import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface ModalHeaderProps extends PropsWithChildren {}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};

export default ModalHeader;
