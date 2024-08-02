import * as S from './index.style';

import { cardCompany } from '~/constants';
import { DefaultCard } from '~/types';

export interface CreditCardProps extends Partial<DefaultCard> {
  size?: 'small' | 'big';
  onClick?: (card?: DefaultCard) => void;
}

const CreditCard = ({
  size = 'small',
  company,
  numbers = ['', '', '', ''],
  endDate = {
    month: 'MM',
    day: 'YY',
  },
  cardUser = undefined,
  onClick,
}: CreditCardProps) => {
  const clickable = onClick ? true : false;
  const encryptedNumbers = Array.from(numbers).map((number, index) => {
    if (typeof number === 'string') {
      return index < 2 ? number : '●'.repeat(number.length);
    }
    return number;
  });

  const handleClickCard = () => {
    onClick && onClick();
  };

  return (
    <S.Container>
      <S.CreditCard
        clickable={clickable}
        onClick={handleClickCard}
        size={size}
        company={company}
      >
        <S.CardTop>{company && cardCompany[company]}</S.CardTop>
        <S.CardMiddle>
          <S.CardChip size={size} />
          <S.CardNumberList>
            {encryptedNumbers.map((number, index) => (
              <S.CardNumberItem key={index}>{number}</S.CardNumberItem>
            ))}
          </S.CardNumberList>
        </S.CardMiddle>
        <S.CardBottom>
          <S.CardBottomLeft>{cardUser}</S.CardBottomLeft>
          <S.CardBottomRight>
            {endDate.month}/{endDate.day}
          </S.CardBottomRight>
        </S.CardBottom>
      </S.CreditCard>
    </S.Container>
  );
};

export default CreditCard;
