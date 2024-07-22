import { MouseEvent } from 'react';
import * as S from './index.style';
import { KeypadNumbers } from '../../types';

interface KeypadProps {
  isOpen: boolean;
  numbers?: KeypadNumbers;
  onClose: () => void;
  onClick?: (value: string) => void;
}

const Keypad = ({
  isOpen,
  onClick,
  onClose,
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}: KeypadProps) => {
  const handleClickBackground = () => {
    onClose && onClose();
  };
  const handleClickKeypad = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      const $number = event.target;

      if ($number.classList.contains('keypad-item')) {
        onClick && onClick($number.innerText);
      }
    }
  };

  return (
    isOpen && (
      <S.DeemBackground onClick={handleClickBackground}>
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
      </S.DeemBackground>
    )
  );
};

export default Keypad;
