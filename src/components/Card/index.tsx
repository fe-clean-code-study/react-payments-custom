import * as S from './index.style';
import GoogleIcon from '../GoogleIcon';

import { cardCompany } from '~/constants';
import { DefaultCard } from '~/types';

interface CardProps extends Partial<DefaultCard> {
  size?: 'small' | 'big';
  onClick?: (card?: DefaultCard) => void;
}

const Card = ({
  size = 'small',
  company = 'none',
  numbers = ['', '', '', ''],
  endDate = {
    month: 'MM',
    day: 'YY',
  },
  cardUser = undefined,
  onClick,
}: CardProps) => {
  const clickable = onClick ? true : false;
  const encryptedNumbers = numbers.map((number, index) => {
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
      <S.Card
        clickable={clickable}
        onClick={handleClickCard}
        size={size}
        company={company}
      >
        {company === 'none' ? (
          <GoogleIcon name='add' />
        ) : (
          <>
            <S.CardTop>{cardCompany[company]}</S.CardTop>
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
          </>
        )}
      </S.Card>
    </S.Container>
  );
};

export default Card;
