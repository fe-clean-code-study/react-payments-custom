import { CardCompany, CardEndDate, CardNumber } from '../../types';
import * as S from './index.style';

interface CardProps {
  type?: 'register' | 'empty';
  numbers?: CardNumber;
  endDate?: CardEndDate;
  cardUser?: string;
  company?: CardCompany;
  size?: 'small' | 'big';
}

const Card = ({
  type = 'register',
  size = 'small',
  company = 'none',
  numbers = ['0000', '0000', '0000', '0000'],
  endDate = {
    month: '00',
    day: '00',
  },
  cardUser = 'User',
}: CardProps) => {
  return (
    <S.Container>
      <S.Card type={type} size={size} company={company}>
        {type === 'register' && (
          <>
            <S.CardTop>{company}</S.CardTop>
            <S.CardMiddle>
              <S.CardChip size={size} />
              <S.CardNumberList>
                {numbers.map((number) => (
                  <S.CardNumberItem key={number}>{number}</S.CardNumberItem>
                ))}
              </S.CardNumberList>
            </S.CardMiddle>
            <S.CardBottom>
              <S.CardBottomLeft>{cardUser}</S.CardBottomLeft>
              <S.CardBottomRight>
                {endDate.month}/{endDate.day}
              </S.CardBottomRight>
            </S.CardBottom>
          </>
        )}
      </S.Card>
    </S.Container>
  );
};

export default Card;
