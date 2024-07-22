import CardInputForm from './CardInputForm';
import CardInputBox from './CardInputBox';
import styled from 'styled-components';
import { useCardInfo } from '../providers/useCardInfo';
import { useRef } from 'react';
import { isNumericString } from '../../../../../utils/isNumericString';
import CardInput from './CardInput';

const CardNumbersForm = () => {
  const firstNumbersRef = useRef<HTMLInputElement>(null);
  const secondNumbersRef = useRef<HTMLInputElement>(null);
  const thirdNumbersRef = useRef<HTMLInputElement>(null);
  const fourthNumbersRef = useRef<HTMLInputElement>(null);

  const numbersRef = [
    firstNumbersRef,
    secondNumbersRef,
    thirdNumbersRef,
    fourthNumbersRef,
  ];

  const { cardInfo, setCardInfo } = useCardInfo();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentIdx = numbersRef.findIndex((ref) => ref.current === e.target);
    const currentValue = e.target.value;

    if (currentValue.length > 4) return;

    if (currentValue && !isNumericString(currentValue)) return;

    const cardNumbers = currentValue.split('').map(Number);

    setCardInfo((prev) => ({
      ...prev,
      numbers: prev.numbers.map((numbers, idx) =>
        idx === currentIdx ? cardNumbers : numbers
      ),
    }));

    if (currentValue.length === 4 && currentIdx < 3) {
      numbersRef[currentIdx + 1].current?.focus();
    }
  };

  return (
    <CardInputForm title='카드번호'>
      <CardInputBox>
        <CardNumbersInputBox>
          <CardInput
            type='text'
            maxLength={4}
            value={cardInfo.numbers[0].join('')}
            onChange={handleCardNumberChange}
            ref={firstNumbersRef}
          />
          <div>-</div>
          <CardInput
            type='text'
            maxLength={4}
            value={cardInfo.numbers[1].join('')}
            onChange={handleCardNumberChange}
            ref={secondNumbersRef}
          />
          <div>-</div>
          <CardInput
            type='password'
            maxLength={4}
            value={cardInfo.numbers[2].join('')}
            onChange={handleCardNumberChange}
            ref={thirdNumbersRef}
          />
          <div>-</div>
          <CardInput
            type='password'
            maxLength={4}
            value={cardInfo.numbers[3].join('')}
            onChange={handleCardNumberChange}
            ref={fourthNumbersRef}
          />
        </CardNumbersInputBox>
      </CardInputBox>
    </CardInputForm>
  );
};

const CardNumbersInputBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

export default CardNumbersForm;
