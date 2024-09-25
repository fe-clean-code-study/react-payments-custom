import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './CardDesign.style';

export interface RootProps {
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

const Root = ({ onClick }: RootProps) => {
  const { watch } = useFormContext();

  return <S.StyledCreditCard {...watch()} onClick={onClick} />;
};

export default Root;
