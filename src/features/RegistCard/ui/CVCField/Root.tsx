import { Controller, useFormContext } from 'react-hook-form';

import * as S from './CVCField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

const Root = () => {
  const { control, getFieldState, formState } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>보안코드(CVC/CVV/)</Field.Label>
      <Controller
        name='securityCode'
        control={control}
        rules={{
          validate: (value) =>
            validateHelper(cardRegsitFormValidate['securityCode'], value),
        }}
        render={({ field: { onChange, onBlur } }) => (
          <S.Input
            type='password'
            onChange={onChange}
            onBlur={onBlur}
            maxLength={3}
            onlyNumber={true}
          />
        )}
      />
      <Field.ErrorText
        isShow={getFieldState('securityCode', formState).error !== undefined}
      >
        보안코드는 3자리의 숫자로 이뤄져야 합니다.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
