import * as S from './index.style';

import { DeemBackground, Keypad } from '~/components';
import { KeypadNumbers } from '~/types';
import suffle from '~/utils/suffle';

interface KeypadModalProps {
  isOpen: boolean;
  close: () => void;
  onSelect: (value: string) => void;
}

const KeypadModal = ({ isOpen, close, onSelect }: KeypadModalProps) => {
  const keypadNumbers: KeypadNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    isOpen && (
      <DeemBackground onClose={close}>
        <S.KeypadContainer>
          <Keypad onClick={onSelect} numbers={suffle(keypadNumbers)} />
        </S.KeypadContainer>
      </DeemBackground>
    )
  );
};

export default KeypadModal;
