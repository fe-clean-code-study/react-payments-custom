import { Controller, useFormContext } from 'react-hook-form';

import * as S from './NumbersField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

const Root = () => {
  const { getFieldState, formState, setFocus, control } = useFormContext();
  const names = ['numbers.0', 'numbers.1', 'numbers.2', 'numbers.3'];

  return (
    <Field.Root>
      <Field.Label>카드 번호</Field.Label>
      <S.InputWrapper>
        {names.map((name, index) => (
          <Controller
            key={index}
            name={name}
            control={control}
            rules={{
              validate: (value) =>
                validateHelper(cardRegsitFormValidate['numbers'], value),
            }}
            render={({ field: { onChange, onBlur, ref } }) => (
              <S.Input
                ref={ref}
                maxLength={4}
                onlyNumber={true}
                onComplete={() => {
                  index < names.length - 1 && setFocus(names[index + 1]);
                }}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        ))}
      </S.InputWrapper>
      <Field.ErrorText
        isShow={getFieldState('numbers', formState).error !== undefined}
      >
        카드 번호를 숫자로 입력해주세요.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
