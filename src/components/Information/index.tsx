import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface InformationProps extends PropsWithChildren {}

const Information = ({ children }: InformationProps) => {
  return <S.Information>{children}</S.Information>;
};

export default Information;
export { default as InformationHeader } from './InformationHeader';
export { default as InformationBody } from './InformationBody';
