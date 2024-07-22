import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  Input,
  InputWrapper,
} from '../../../components';
import * as S from '../index.style';

const InputSecurityCode = () => {
  const { control } = useFormContext();

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>보안코드(CVC/CVV)</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.InputSecurityCodeContainer>
          <InputWrapper>
            <Controller
              name='securityCode'
              control={control}
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
