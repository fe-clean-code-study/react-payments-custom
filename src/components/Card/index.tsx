import { cardCompany } from '../../constants';
import { CardCompany, CardEndDate, CardNumber } from '../../types';
import * as S from './index.style';

interface CardProps {
  numbers?: CardNumber;
  endDate?: CardEndDate;
  cardUser?: string;
  company?: CardCompany;
  size?: 'small' | 'big';
  clickable?: boolean;
  onClick?: () => void;
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
  clickable = false,
  onClick,
}: CardProps) => {
  const handleClickCard = () => {
    onClick && onClick();
  };
  const editedNumbers = numbers.map((number, index) =>
    index < 2 ? number : '●'.repeat(number.length),
  );

  return (
    <S.Container>
      <S.Card
        onClick={handleClickCard}
        size={size}
        clickable={clickable}
        company={company}
      >
        {company !== 'none' ? (
          <>
            <S.CardTop>{cardCompany[company]}</S.CardTop>
            <S.CardMiddle>
              <S.CardChip size={size} />
              <S.CardNumberList>
                {editedNumbers.map((number, index) => (
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
        ) : (
          <span className='material-symbols-outlined'>add</span>
        )}
      </S.Card>
    </S.Container>
  );
};

export default Card;
