import { ComponentProps } from 'react';

import * as S from './CreditCard.style';

import { CARD_COMPANY } from '~/entities/Card/constants';
import { DefaultCard } from '~/entities/Card/types';

export interface RootProps extends ComponentProps<'div'>, Partial<DefaultCard> {
  size?: 'small' | 'big';
  showChip?: boolean;
}

const Root = ({
  size = 'small',
  showChip = true,
  company = undefined,
  numbers = ['', '', '', ''],
  expirationDate = { month: '', year: '' },
  cardUser = '',
  children,
  ...props
}: RootProps) => {
  return (
    <S.Root size={size} company={company} {...props}>
      {children}
      <S.Top>{company && CARD_COMPANY[company]}</S.Top>
      <S.Center>
        {showChip && <S.Chip size={size} />}
        <S.CardNumberList>
          {numbers?.map((number, index) => (
            <S.CardNumberItem key={index}>
              {index < 2 ? number : number.replace(/\d/g, '•')}
            </S.CardNumberItem>
          ))}
        </S.CardNumberList>
      </S.Center>
      <S.Bottom>
        <div>{cardUser}</div>
        <div>
          {expirationDate?.month}/{expirationDate?.year}
        </div>
      </S.Bottom>
    </S.Root>
  );
};

export default Root;
