import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  Input,
  InputWrapper,
} from '../../../components';
import * as S from '../index.style';
import { useEffect, useState } from 'react';

const InputSecurityCode = () => {
  const { control, getFieldState, formState } = useFormContext();
  const [isInvalidation, setIsInvalidation] = useState<boolean>(false);
  const { invalid } = getFieldState('securityCode', formState);

  useEffect(() => {
    setIsInvalidation(invalid);
  }, [invalid]);

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>보안코드(CVC/CVV)</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.InputSecurityCodeContainer>
          <InputWrapper isInvalidation={isInvalidation}>
            <Controller
              name='securityCode'
              control={control}
              rules={{
                required: true,
                validate: (value) => value.length === 3,
              }}
              render={({ field: { onChange } }) => (
                <Input
                  maxLength={3}
                  textAlign='center'
                  onlyNumber={true}
                  onChange={onChange}
                />
              )}
            />
          </InputWrapper>
        </S.InputSecurityCodeContainer>
      </InformationBody>
    </Information>
  );
};

export default InputSecurityCode;
