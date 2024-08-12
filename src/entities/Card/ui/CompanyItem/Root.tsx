import { ComponentProps } from 'react';

import * as S from './CompanyItem.style';
import { CARD_COMPANY } from '../../constants';
import type { Company } from '../../types';

export interface RootProps extends ComponentProps<'div'> {
  company: Company;
}

const Root = ({ company, ...props }: RootProps) => {
  return (
    <S.Container {...props}>
      <S.Color company={company} />
      <div>{CARD_COMPANY[company]}</div>
    </S.Container>
  );
};

export default Root;
