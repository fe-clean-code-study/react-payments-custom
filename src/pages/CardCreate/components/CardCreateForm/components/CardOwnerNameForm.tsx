import styled from 'styled-components';
import CardInput from './CardInput';
import CardInputBox from './CardInputBox';
import CardInputForm from './CardInputForm';
import { useCardInfo } from '../providers/useCardInfo';
import { ChangeEvent } from 'react';

const CardOwnerNameForm = () => {
  const { cardInfo, setCardInfo } = useCardInfo();
  const nameCount = cardInfo.ownerName.length;

  const handleOwnerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 30) return;

    setCardInfo((prev) => ({
      ...prev,
      ownerName: value,
    }));
  };

  return (
    <CardInputForm title='카드 소유자 이름(선택)'>
      <CardOwnerNameCounter>{nameCount}/30</CardOwnerNameCounter>
      <CardInputBox>
        <CardInput
          onChange={handleOwnerNameChange}
          value={cardInfo.ownerName}
        />
      </CardInputBox>
    </CardInputForm>
  );
};

const CardOwnerNameCounter = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
  color: #525252;
`;

export default CardOwnerNameForm;
