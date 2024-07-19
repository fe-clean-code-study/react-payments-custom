import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface InformationHeaderProps extends PropsWithChildren {}

const InformationHeader = ({ children }: InformationHeaderProps) => {
  return <S.InformationHeader>{children}</S.InformationHeader>;
};

export default InformationHeader;
