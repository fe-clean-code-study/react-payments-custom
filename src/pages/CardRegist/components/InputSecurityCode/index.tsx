import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader, Input, InputWrapper } from '~/components';
import { cardRegsitFormValidate } from '~/utils/cardRegistFormValidate';
import { validateHelper } from '~/utils/validateHelper';

const InputSecurityCode = () => {
  const { control, getFieldState, formState } = useFormContext();
  const { invalid } = getFieldState('securityCode', formState);

  return (
    <Card>
      <CardHeader>
        <TitleText label={'보안코드(CVC/CVV)'} />
      </CardHeader>
      <CardBody>
        <S.InputSecurityCodeContainer>
          <InputWrapper isInvalidation={invalid}>
            <Controller
              name='securityCode'
              control={control}
              rules={{
                validate: (value) =>
                  validateHelper(cardRegsitFormValidate.securityCode, value),
              }}
              render={({ field: { onChange } }) => (
                <Input
                  maxLength={3}
                  type={'password'}
                  textAlign='center'
                  onlyNumber={true}
                  onChange={onChange}
                />
              )}
            />
          </InputWrapper>
        </S.InputSecurityCodeContainer>
      </CardBody>
    </Card>
  );
};

export default InputSecurityCode;
