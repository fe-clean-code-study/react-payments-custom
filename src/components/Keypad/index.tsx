import { MouseEvent } from 'react';
import * as S from './index.style';
import { KeypadNumbers } from '../../types';

interface KeypadProps {
  isOpen: boolean;
  onClose?: () => void;
  numbers?: KeypadNumbers;
  index?: number;
  onClick?: (value: string, index: number) => void;
}

const Keypad = ({
  isOpen,
  onClick,
  onClose,
  index = 0,
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}: KeypadProps) => {
  const handleClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof HTMLDivElement) {
      if (target.classList.contains('keypad-item')) {
        onClick && onClick(target.innerText, index);
      } else if (target.classList.contains('keypad-background')) {
        onClose && onClose();
      }
    }
  };
  const handleClickKeypad = () => {};

  return (
    isOpen && (
      <S.DeemBackground
        className='keypad-background'
        onClick={handleClickBackground}
      >
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
