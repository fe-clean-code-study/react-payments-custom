import { PropsWithChildren } from 'react';
import * as S from './index.style';

export interface InformationHeaderProps extends PropsWithChildren {}

const InformationHeader = ({ children }: InformationHeaderProps) => {
  return <S.InformationHeader>{children}</S.InformationHeader>;
};

export default InformationHeader;
