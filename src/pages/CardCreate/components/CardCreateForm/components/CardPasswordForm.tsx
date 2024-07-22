import styled from 'styled-components';
import CardInputBox from './CardInputBox';
import CardInputForm from './CardInputForm';
import CardInput from './CardInput';
import { ChangeEvent, useRef, useState } from 'react';
import { isNumericString } from '../../../../../utils/isNumericString';

const CardPasswordForm = () => {
  const firstPasswordRef = useRef<HTMLInputElement>(null);
  const secondPasswordRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<(number | null)[]>([null, null]);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.target;
    const currentValue = e.target.value;

    if (currentValue && !isNumericString(currentValue)) return;

    const newValue = currentValue ? Number(currentValue) : null;
    const newPassword =
      currentTarget === firstPasswordRef.current
        ? [newValue, password[1]]
        : [password[0], newValue];

    setPassword(newPassword);

    if (currentTarget === firstPasswordRef.current) {
      secondPasswordRef.current?.focus();
    }
  };

  return (
    <CardInputForm title='카드 비밀번호'>
      <CardPasswordInputBox>
        <CardInputBox width='49px'>
          <CardInput
            type='password'
            maxLength={1}
            value={password[0] === null ? '' : password[0]}
            onChange={handlePasswordChange}
            ref={firstPasswordRef}
          />
        </CardInputBox>
        <CardInputBox width='49px'>
          <CardInput
            type='password'
            maxLength={1}
            value={password[1] === null ? '' : password[1]}
            onChange={handlePasswordChange}
            ref={secondPasswordRef}
          />
        </CardInputBox>
        <CardPasswordBackNumber>•</CardPasswordBackNumber>
        <CardPasswordBackNumber>•</CardPasswordBackNumber>
      </CardPasswordInputBox>
    </CardInputForm>
  );
};

const CardPasswordInputBox = styled.div`
  display: flex;
  gap: 10px;
`;

const CardPasswordBackNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 49px;
`;

export default CardPasswordForm;
