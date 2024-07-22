import { ChangeEvent, useState } from 'react';
import CardInput from './CardInput';
import CardInputBox from './CardInputBox';
import CardInputForm from './CardInputForm';
import { isNumericString } from '../../../../../utils/isNumericString';

const CardSecureNumberForm = () => {
  const [cardSecureNumber, setCardSecureNumber] = useState('');

  const handleCardSecureNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value && !isNumericString(value)) return;

    if (value.length > 3) return;

    setCardSecureNumber(value);
  };

  return (
    <CardInputForm title='보안 코드(CVC/CW)'>
      <CardInputBox width='84px'>
        <CardInput
          type='password'
          value={cardSecureNumber}
          onChange={handleCardSecureNumberChange}
        />
      </CardInputBox>
    </CardInputForm>
  );
};

export default CardSecureNumberForm;
