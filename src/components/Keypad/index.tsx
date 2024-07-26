import { MouseEvent } from 'react';

import * as S from './index.style';

import { KeypadNumbers } from '~/types';

interface KeypadProps {
  numbers?: KeypadNumbers;
  onClick?: (value: string) => void;
}

const Keypad = ({
  onClick,
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}: KeypadProps) => {
  const handleClickKeypad = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLDivElement) {
      if (target.classList.contains('keypad-item')) {
        onClick && onClick(target.innerText);
      }
    }
  };

  return (
    <S.KeypadContainer onClick={handleClickKeypad}>
      {numbers.map((number, index) => (
        <S.KeypadItem
          order={index === 8 || index === 9 ? index + 1 : index}
          className='keypad-item'
          key={index}
        >
          {number}
        </S.KeypadItem>
      ))}
      <S.LeftEmptyItem />
      <S.RightEmptyItem />
    </S.KeypadContainer>
  );
};

export default Keypad;
