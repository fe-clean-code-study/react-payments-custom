import { MouseEvent } from 'react';

import * as S from './PasswordField.style';

import { Keypad } from '~/shared/ui';
import { suffleArray } from '~/shared/utils';

interface KeypadDrawerProps {
  onClick: (number: string) => void;
}

const KeypadDrawer = ({ onClick }: KeypadDrawerProps) => {
  const randomNumber = suffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleClickKeypad = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;

    const $KeypadItem = event.target.closest('.keypad-item');

    if (!($KeypadItem instanceof HTMLDivElement)) return;
    const { num } = $KeypadItem.dataset;

    if (num) {
      onClick(num);
    }
  };

  return (
    <Keypad.Root row={3} col={4} onClick={handleClickKeypad}>
      {randomNumber.map((num, index) => (
        <S.KeypadItem
          className='keypad-item'
          data-num={num}
          key={`keypadItem-${index}`}
        >
          {num}
        </S.KeypadItem>
      ))}
    </Keypad.Root>
  );
};

export default KeypadDrawer;
