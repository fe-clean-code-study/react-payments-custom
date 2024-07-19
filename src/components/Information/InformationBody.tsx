import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface InformationBody extends PropsWithChildren {}

const InformationBody = ({ children }: InformationBody) => {
  return <S.InformationBody>{children}</S.InformationBody>;
};

export default InformationBody;
