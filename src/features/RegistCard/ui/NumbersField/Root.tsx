import { useFormContext } from 'react-hook-form';

import * as S from './NumbersField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

const Root = () => {
  const { register, getFieldState, formState, setFocus } = useFormContext();
  const names = ['numbers.0', 'numbers.1', 'numbers.2', 'numbers.3'];

  return (
    <Field.Root>
      <Field.Label>카드 번호</Field.Label>
      <S.InputWrapper>
        {names.map((name, index) => (
          <S.Input
            key={index}
            maxLength={4}
            onComplete={() => {
              index < names.length - 1 && setFocus(names[index + 1]);
            }}
            {...register(name, {
              maxLength: 4,
              required: true,
              validate: (value) =>
                validateHelper(cardRegsitFormValidate['numbers'], value),
            })}
          />
        ))}
      </S.InputWrapper>
      <Field.ErrorText
        isShow={getFieldState('numbers', formState).error !== undefined}
      >
        카드 번호를 입력해주세요.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
