import styled from 'styled-components';
import { convertCardNumbersToString } from '../../utils/convertCardNumbersToString';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'm' | 'l';
  color?: string;
  cardInfo: CardInfo;
}

const Card = ({ color, cardInfo, ...props }: CardProps) => {
  const { name, numbers, ownerName, validMonth, validYear } = cardInfo;

  const validMonthText = validMonth ? validMonth.padStart(2, '0') : 'MM';
  const validYearText = validYear ? validYear.slice(-2).padStart(2, '0') : 'YY';

  return (
    <CardLayout color={color} {...props}>
      <CardName>{name || ' '}</CardName>
      <CardICBox />
      <CardNumber>
        {numbers ? convertCardNumbersToString(numbers) : ' '}
      </CardNumber>
      <CardInfoRow>
        <CardOwnerName>{ownerName || 'NAME'}</CardOwnerName>
        <CardValidDate>
          {validMonthText} / {validYearText}
        </CardValidDate>
      </CardInfoRow>
    </CardLayout>
  );
};

const CardLayout = styled.div<Pick<CardProps, 'color'>>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 208px;
  height: 130px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ color }) => color || '#d2d2d2'};
  color: #525252;
  padding: 13px;
`;

const CardICBox = styled.div`
  width: 39px;
  height: 25px;
  border-radius: 4px;
  background: #cbba64;
  margin: 15px 0 15px;
`;

const CardName = styled.p`
  font-size: 10px;
  white-space: pre-wrap;
`;

const CardOwnerName = styled.p`
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardNumber = styled.p`
  text-align: center;
  letter-spacing: 2px;
  white-space: pre-wrap;
`;

const CardValidDate = styled.p``;

const CardInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Card;
