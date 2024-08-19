import { Controller, useFormContext } from 'react-hook-form';

import * as S from './ExpirationDateField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

const Root = () => {
  const names = ['expirationDate.month', 'expirationDate.year'];
  const { control, setFocus, getFieldState, formState } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>만료일</Field.Label>
      <S.InputWrapper>
        {names.map((name, index) => (
          <>
            <Controller
              key={`controller-${index}`}
              name={name}
              control={control}
              rules={{
                validate: (value) => {
                  const key =
                    name === 'expirationDate.month' ? 'month' : 'year';

                  return validateHelper(
                    cardRegsitFormValidate.endDate[key],
                    value,
                  );
                },
              }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <S.Input
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  onlyNumber={true}
                  maxLength={2}
                  onComplete={() => {
                    index < names.length - 1 && setFocus(names[index + 1]);
                  }}
                  placeholder={name === 'expirationDate.month' ? 'MM' : 'YY'}
                />
              )}
            />
            <S.DividerText>{index < 1 && '/'}</S.DividerText>
          </>
        ))}
      </S.InputWrapper>
      <Field.ErrorText
        isShow={getFieldState('expirationDate', formState).error !== undefined}
      >
        만료일을 정확하게 입력해주세요.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
