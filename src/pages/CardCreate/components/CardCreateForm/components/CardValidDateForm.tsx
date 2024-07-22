import styled from 'styled-components';
import CardInputBox from './CardInputBox';
import CardInputForm from './CardInputForm';
import { useCardInfo } from '../providers/useCardInfo';
import CardInput from './CardInput';
import { useRef } from 'react';
import { isNumericString } from '../../../../../utils/isNumericString';

const CardValidDateForm = () => {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const { cardInfo, setCardInfo } = useCardInfo();

  const handleValidDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = e.target;
    const currentValue = e.target.value;

    if (currentValue.length > 2) return;

    if (currentValue && !isNumericString(currentValue)) return;

    setCardInfo((prev) => ({
      ...prev,
      validMonth:
        currentInput === monthRef.current ? currentValue : prev.validMonth,
      validYear:
        currentInput === yearRef.current ? currentValue : prev.validYear,
    }));

    if (currentValue.length === 2 && currentInput === monthRef.current) {
      yearRef.current?.focus();
    }
  };
  return (
    <CardInputForm title='만료일'>
      <CardInputBox width='137px'>
        <CardValidDateInputBox>
          <CardInput
            onChange={handleValidDateChange}
            ref={monthRef}
            value={cardInfo.validMonth || ''}
            placeholder='MM'
          />
          <div>/</div>
          <CardInput
            onChange={handleValidDateChange}
            ref={yearRef}
            value={cardInfo.validYear || ''}
            placeholder='YY'
          />
        </CardValidDateInputBox>
      </CardInputBox>
    </CardInputForm>
  );
};

const CardValidDateInputBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
`;

export default CardValidDateForm;
